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
      'Record': 0,
      'Database': 1,
      'Table': 2,
      'View': 3,
      'Column': 4,
      'Key': 5,
      'Procedure': 6,
      'Function': 7
  };

  // Connection inndex used to build backend data requests.
  SelectedConnection: string;

  // Schema name used to build backend data requests. Not mandatory but usefull for deug
  SelectedSchema: string;

  // Table name used to build backend data requests.
  SelectedTable: string;

  // Here all cards will be stored by type. The indexes are provided by CardType
  public allCards = new BehaviorSubject( new Array() );

  // Default constructor
  constructor(private http: HttpClient) { }

  // Setter for a given cards type
  private setCards(cardType: number, data: any) {
    this.allCards[cardType] = data;
  }

  // Getter for a given cards type
  getCards(cardType) {
    return this.allCards[cardType];
  }

  updateCards(data) {
      console.log('Successfully received ' + data.data.length + ' ' + data.post.list + ' cards');
      switch(data.post.list)
      {
        case 'columns':
        this.setCards(DataService.CardType.Column, data.data);
          break;
        case 'connections':
        this.setCards(DataService.CardType.Database, data.data);
          break;
        case 'functions':
        this.setCards(DataService.CardType.Function, data.data);
          break;
        case 'keys':
        this.setCards(DataService.CardType.Key, data.data);
          break;
        case 'procedures':
        this.setCards(DataService.CardType.Procedure, data.data);
          break;
        case 'tables':
        this.setCards(DataService.CardType.Table, data.data);
          break;
        case 'views':
        this.setCards(DataService.CardType.View, data.data);
          break;
    }
  };

  // Bring data from Backend API as Json
  PostRequest(CardType: number) {

    // Make the HTTP request:
    let params = {};

    switch ( CardType ) {
      case DataService.CardType.Column:
      params = {
        select: 'plain',
        list: 'columns',
        database: 'chinook (SQLite)',
        connection: this.SelectedConnection,
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
        database: 'chinook (SQLite)',
        connection: this.SelectedConnection,
        fetch: 'objects',
        filter: '%',
        startTime: '40839.925'
      };
      break;
      case DataService.CardType.Key:
      params = {
        select: 'plain',
        list: 'keys',
        database: 'chinook (SQLite)',
        connection: this.SelectedConnection,
        fetch: 'objects',
        filter: '%',
        startTime: '40839.925'
      };
      break;
      case DataService.CardType.Procedure:
      params = {
        select: 'plain',
        list: 'procedures',
        database: 'chinook (SQLite)',
        connection: this.SelectedConnection,
        fetch: 'objects',
        filter: '%',
        startTime: '40839.925'
      };
      break;
      case DataService.CardType.Table:
      params = {
        select: 'plain',
        list: 'tables',
        database: 'chinook (SQLite)',
        connection: this.SelectedConnection,
        fetch: 'objects',
        filter: '%',
        startTime: '40839.925'
      };
      break;
      case DataService.CardType.View:
      params = {
        select: 'plain',
        list: 'views',
        database: 'chinook (SQLite)',
        connection: this.SelectedConnection,
        fetch: 'objects',
        filter: '%',
        startTime: '40839.925'
      };
      break;
      case DataService.CardType.Record:
        params = {
          select: 'plain',
          list: 'records',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          schema: this.SelectedSchema,
          table: this.SelectedTable,
          fetch: 'objects',
          startTime: '40839.925'
        };
      break;
    }

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, params: params });
    this.http.post('http://localhost:86/my/api/index.php',
    params)
    .subscribe(data => {
      this.updateCards(data);
    }, error => {
        console.log(JSON.stringify(error.json()));
    });
  }
}
