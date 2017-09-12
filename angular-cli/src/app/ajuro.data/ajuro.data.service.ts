import { ValueCache } from 'ag-grid/dist/lib/valueService/valueCache';
// import { CardsService } from '../ajuro.cards/ajuro.cards.service';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
// HTTP specific imports
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';

// Data Acccess
@Injectable()
export class DataService {

  // Object types that can be requested
  public static CardType = {
    Record: 0,
    Database: 1,
    Table: 2,
    View: 3,
    Column: 4,
    Key: 5,
    Procedure: 6,
    Function: 7
  };

  // Here all cards will be stored by type. The indexes are provided by CardType
  public static cardsFilterValue = new BehaviorSubject('');
  public static gridFilterValue = new BehaviorSubject('');
  public static allCards = new BehaviorSubject(new Array());
  public static LastType = new BehaviorSubject(-1);
  public static inst = 0;

  // Connection inndex used to build backend data requests.
  static PinnedConnections = new Array<number>();
  static SelectedConnection: number;
  static SelectedDatabase = new Array<string>();

  // Schema name used to build backend data requests. Not mandatory but usefull for deug
  SelectedSchema: string;

  // Table name used to build backend data requests.
  SelectedTable: string;

  public allCards = new Array();

  // Default constructor
  constructor(private http: HttpClient) {
    DataService.inst++;

    DataService.allCards.subscribe((allCards) => {
        if (typeof(allCards[DataService.CardType.Table]) !== 'undefined') {
        console.log('Updated tables to: ' + allCards[DataService.CardType.Table].length);
      }
    });
  }

  // Setter for a given cards type
  public setCards(cardType: number, data: any, source: number) {
    DataService.LastType.next(cardType);
    const allCards = DataService.allCards.getValue();
    if (typeof(allCards[DataService.CardType.Table]) !== 'undefined') {
      console.log(cardType + ' source ' + source + ' Found: ' + allCards[DataService.CardType.Table].length);
    }
    if (
        cardType !== DataService.CardType.View &&
        cardType !== DataService.CardType.Function &&
        cardType !== DataService.CardType.Key &&
        cardType !== DataService.CardType.Procedure
      ) {
          allCards[0] = data;
        }

    if (data.length > 0) {
      const properties = Object.getOwnPropertyNames(data[0]);
      for (let k = 0; k < data.length; k++) {
        let existentCard = null;
        if ( typeof(allCards[cardType]) === 'undefined' ) {
          allCards[cardType] = [];
        }
        for (let i = 0; i < allCards[cardType].length; i++) {
          let sameValues = true;
          for (let p = 0; p < properties.length; p++) {
            if (properties[p] !== 'ajuro_meta' && allCards[cardType][i][properties[p]] !== data[k][properties[p]]) {
              sameValues = false;
            }
          }
          if (sameValues) {
            existentCard = allCards[cardType][i];
            if (cardType === 0 && typeof(existentCard.ajuro_meta) === 'undefined')
            {
              existentCard.ajuro_meta = {'sources':[]};
            }
            const sourceIndex = existentCard.ajuro_meta.sources.indexOf(source);
            if ( sourceIndex < 0 ) {
              existentCard.ajuro_meta.sources.push(source);
            }
          }
        }
        if (existentCard === null) {
          const item = data[k];
          item['ajuro_meta'] = { sources : [source] };
          allCards[cardType].push(data[k]);
        }
      }
    }

    DataService.allCards.next(allCards);
    if (typeof(DataService.allCards.getValue()[DataService.CardType.Table]) !== 'undefined') {
      console.log('Update: ' + DataService.allCards.getValue()[DataService.CardType.Table].length);
    }
  }

  // Getter for a given cards type
  getCards(cardType) {
    return 0;
  }

  // Add the new arguments to the collection of parameters that can be used to crete the request body
  processArguments(CardType: number, data: any): any {
    let selectedRecord;
    switch (CardType) {
      case DataService.CardType.Column:
      break;
      case DataService.CardType.Database:
      break;
      case DataService.CardType.Record:
      selectedRecord = DataService.allCards.getValue()[DataService.CardType.Table][data];
      // this.SelectedDatabase = selectedRecord.Database;
      this.SelectedSchema = selectedRecord.Schema;
      this.SelectedTable = selectedRecord.Table;
      break;
      case DataService.CardType.Table:
      case DataService.CardType.View:
      case DataService.CardType.Function:
      case DataService.CardType.Key:
      case DataService.CardType.Procedure:
      selectedRecord = DataService.allCards.getValue()[DataService.CardType.Database][data];
      this.setConnection(selectedRecord.Id - 1);
      this.setDatabase(selectedRecord.Name);
      break;
    }
  }

  updateCards(data) {
    switch (data.post.list) {
      case 'columns':
        this.setCards(DataService.CardType.Column, data.data, data.post.connection);
        break;
      case 'connections':
        this.setCards(DataService.CardType.Database, data.data, data.post.connection);
        break;
      case 'functions':
        this.setCards(DataService.CardType.Function, data.data, data.post.connection);
        break;
      case 'keys':
        this.setCards(DataService.CardType.Key, data.data, data.post.connection);
        break;
      case 'procedures':
        this.setCards(DataService.CardType.Procedure, data.data, data.post.connection);
        break;
      case 'tables':
        this.setCards(DataService.CardType.Table, data.data, data.post.connection);
        break;
      case 'views':
        this.setCards(DataService.CardType.View, data.data, data.post.connection);
        break;
      case 'records':
        this.setCards(DataService.CardType.Record, data.data, data.post.connection);
        break;
    }
  }

    /**
   * @ngdoc method
   * @name DataService#getConnections
   *  Get all the connections, both pinned ant the selected
   * @param {event} event no parameter
   *
   * @return {method} ArrayConnections as the collection of pinned connection plus the selected one
   */
  getConnections() {
    const ArrayConnections = DataService.PinnedConnections.slice(0);
    const existentIndex = ArrayConnections.indexOf(DataService.SelectedConnection);
    if ( existentIndex < 0 ) {
      ArrayConnections.push(DataService.SelectedConnection);
    }
    return ArrayConnections;
  }

  // set the current sellection, regardless if is pinned or not
  setConnection(value: number) {
    DataService.SelectedConnection = value;
  }

    toggleConnection(value: number, keep: boolean) {
      const existentIndex = DataService.PinnedConnections.indexOf(value);
      keep = existentIndex < 0;
      if ( keep && existentIndex < 0 ) {
        DataService.PinnedConnections.push(value);
      }
      if ( !keep && existentIndex >= 0 ) {
        DataService.PinnedConnections.splice(existentIndex, 1);
      }
    }

      getDatabase() {
        // console.log('get connection ' + DataService.SelectedDatabase);
        return DataService.SelectedDatabase;
      }

      setDatabase(value) {
        // console.log('set connection ' + DataService.SelectedDatabase);
        DataService.SelectedDatabase = value;
      }

  // Bring data from Backend API as Json
  public PostRequest(CardType: number, data: {}) {

    // Clear before repopulate...
    const existentCards = DataService.allCards.getValue();
    existentCards[CardType] = [];
    DataService.allCards.next(existentCards);
    if (typeof(DataService.allCards.getValue()[DataService.CardType.Table]) !== 'undefined') {
      console.log('Clear: ' + DataService.allCards.getValue()[DataService.CardType.Table].length);
    }
    this.processArguments(CardType, data);

    this.getConnections().forEach(connection => {
           // Make the HTTP request:
          let params = {};
          switch (CardType) {
            case DataService.CardType.Column:
              params = {
                select: 'plain',
                list: 'columns',
                database: this.getDatabase(),
                connection: connection,
                fetch: 'objects',
                filter: '%',
                startTime: '40839.925'
              };
              break;
            case DataService.CardType.Database:
              params = {
                select: 'plain',
                list: 'connections',
                fetch: 'objects'
              };
              break;
            case DataService.CardType.Function:
              params = {
                select: 'plain',
                list: 'functions',
                database: this.getDatabase(),
                connection: connection,
                fetch: 'objects',
                filter: '%',
                startTime: '40839.925'
              };
              break;
            case DataService.CardType.Key:
              params = {
                select: 'plain',
                list: 'keys',
                database: this.getDatabase(),
                connection: connection,
                fetch: 'objects',
                filter: '%',
                startTime: '40839.925'
              };
              break;
            case DataService.CardType.Procedure:
              params = {
                select: 'plain',
                list: 'procedures',
                database: this.getDatabase(),
                connection: connection,
                fetch: 'objects',
                filter: '%',
                startTime: '40839.925'
              };
              break;
            case DataService.CardType.Table:
              params = {
                select: 'plain',
                list: 'tables',
                database: this.getDatabase(),
                connection: connection,
                fetch: 'objects',
                filter: '%',
                startTime: '40839.925'
              };
              break;
            case DataService.CardType.View:
              params = {
                select: 'plain',
                list: 'views',
                database: this.getDatabase(),
                connection: connection,
                fetch: 'objects',
                filter: '%',
                startTime: '40839.925'
              };
              break;
            case DataService.CardType.Record:
              params = {
                select: 'plain',
                list: 'records',
                database: this.getDatabase(),
                connection: connection,
                schema: this.SelectedSchema,
                table: this.SelectedTable,
                fetch: 'objects',
                startTime: '40839.925'
              };
              break;
          }

          const headers = new Headers({ 'Content-Type': 'application/json' });
          const options = new RequestOptions({ headers: headers, params: params });
          this.http.post('http://localhost:86/my/api/index.php', params).subscribe(
            data   => {
              if (data != null) {
                this.updateCards(data);
                console.log(data + ' results!' + JSON.stringify(data['post']));
              } else {
                console.log('No results!');
              }
            },
            error => {
              console.log(JSON.stringify(error));
            }
          );
    });
  }
}
