import { ValueCache } from 'ag-grid/dist/lib/valueService/valueCache';
import { CardsService } from '../ajuro.cards/ajuro.cards.service';
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
  public static allCards = new BehaviorSubject(new Array());
  public static inst = 0;

  // Connection inndex used to build backend data requests.
  static SelectedConnection: string;
  static SelectedDatabase: string;

  // Schema name used to build backend data requests. Not mandatory but usefull for deug
  SelectedSchema: string;

  // Table name used to build backend data requests.
  SelectedTable: string;

  public allCards = new Array();

  // Default constructor
  constructor(private http: HttpClient) {
    DataService.inst++;
  }

  // Setter for a given cards type
  private setCards(cardType: number, data: any) {
    let allCards = DataService.allCards.getValue();
    if(
        cardType !== DataService.CardType.View &&
        cardType !== DataService.CardType.Function &&
        cardType !== DataService.CardType.Key &&
        cardType !== DataService.CardType.Procedure) {
          allCards[0] = data;
        }
    allCards[cardType] = data;
    DataService.allCards.next(allCards);
  }

  // Getter for a given cards type
  getCards(cardType) {
    return 0;//  DataService.allCards[cardType];
  }

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
      case "columns":
        this.setCards(DataService.CardType.Column, data.data);
        break;
      case "connections":
        this.setCards(DataService.CardType.Database, data.data);
        break;
      case "functions":
        this.setCards(DataService.CardType.Function, data.data);
        break;
      case "keys":
        this.setCards(DataService.CardType.Key, data.data);
        break;
      case "procedures":
        this.setCards(DataService.CardType.Procedure, data.data);
        break;
      case "tables":
        this.setCards(DataService.CardType.Table, data.data);
        break;
      case "views":
        this.setCards(DataService.CardType.View, data.data);
        break;
    }
  }

    getConnection() {
      console.log('get connection ' + DataService.SelectedConnection);
      return DataService.SelectedConnection;
    }

    setConnection(value) {
      console.log('set connection ' + DataService.SelectedConnection);
      DataService.SelectedConnection = value;
    }

      getDatabase() {
        console.log('get connection ' + DataService.SelectedDatabase);
        return DataService.SelectedDatabase;
      }

      setDatabase(value) {
        console.log('set connection ' + DataService.SelectedDatabase);
        DataService.SelectedDatabase = value;
      }

  // Bring data from Backend API as Json
  public PostRequest(CardType: number, data: {}) {
    this.processArguments(CardType, data);

    // Make the HTTP request:
    let params = {};

    switch (CardType) {
      case DataService.CardType.Column:
        params = {
          select: "plain",
          list: "columns",
          database: this.getDatabase(),
          connection: this.getConnection(),
          fetch: "objects",
          filter: "%",
          startTime: "40839.925"
        };
        break;
      case DataService.CardType.Database:
        params = {
          select: "plain",
          list: "connections",
          fetch: "objects"
        };
        break;
      case DataService.CardType.Function:
        params = {
          select: "plain",
          list: "functions",
          database: this.getDatabase(),
          connection: this.getConnection(),
          fetch: "objects",
          filter: "%",
          startTime: "40839.925"
        };
        break;
      case DataService.CardType.Key:
        params = {
          select: "plain",
          list: "keys",
          database: this.getDatabase(),
          connection: this.getConnection(),
          fetch: "objects",
          filter: "%",
          startTime: "40839.925"
        };
        break;
      case DataService.CardType.Procedure:
        params = {
          select: "plain",
          list: "procedures",
          database: this.getDatabase(),
          connection: this.getConnection(),
          fetch: "objects",
          filter: "%",
          startTime: "40839.925"
        };
        break;
      case DataService.CardType.Table:
        params = {
          select: "plain",
          list: "tables",
          database: this.getDatabase(),
          connection: this.getConnection(),
          fetch: "objects",
          filter: "%",
          startTime: "40839.925"
        };
        break;
      case DataService.CardType.View:
        params = {
          select: "plain",
          list: "views",
          database: this.getDatabase(),
          connection: this.getConnection(),
          fetch: "objects",
          filter: "%",
          startTime: "40839.925"
        };
        break;
      case DataService.CardType.Record:
        params = {
          select: "plain",
          list: "records",
          database: this.getDatabase(),
          connection: this.getConnection(),
          schema: this.SelectedSchema,
          table: this.SelectedTable,
          fetch: "objects",
          startTime: "40839.925"
        };
        break;
    }

    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers, params: params });
    this.http.post("http://localhost:86/my/api/index.php", params).subscribe(
      data   => { // {'data':[], post:{}}
        if (data != null) {
          this.updateCards(data);
          console.log(data + ' results!');
        } else {
          console.log('No results!');
        }
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    );
  }
}
