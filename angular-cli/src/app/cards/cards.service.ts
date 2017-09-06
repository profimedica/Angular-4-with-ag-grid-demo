/*import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';*/
import { CardModel } from './cards.model';

/*@Injectable()*/
export class CardsService {

  public CardType = 
  { 
      'Record': -1, 
      'Database': 0, 
      'Table': 1, 
      'View': 2, 
      'Column': 3, 
      'Key': 4, 
      'Procedure': 5, 
      'Function': 6 
  };

  private allDatabaseCards: CardModel[] = [];
  private allTableCards: CardModel[] = [];
  private allViewCards: CardModel[] = [];
  private allColumnCards: CardModel[] = [];
  private allKeyCards: CardModel[] = [];
  private allProcedureCards: CardModel[] = [];
  private allFunctionCards: CardModel[] = [];

  constructor(
    // private backend: BackendService,
    // private logger: Logger
  ) { }

  public updateDatabases(data: any) {
    this.allDatabaseCards = data;
  }

  public updateTables(data: any) {
    this.allTableCards = data;
  }

  public updateViews(data: any) {
    this.allViewCards = data;
  }

  public updateColumns(data: any) {
    this.allColumnCards = data;
  }

  public updateKeys(data: any) {
    this.allKeyCards = data;
  }

  public updateProcedures(data: any) {
    this.allProcedureCards = data;
  }

  public updateFunctions(data: any) {
    this.allFunctionCards = data;
  }

  /*
  public updateDatabases(data) {
    this.databases = [];
    for (let i = 0; i < data.length; i++ ) {
      this.databases.push(data[i]);
    }
    console.log('Added ' + this.databases.length + ' cards');
  }
  */

    getCards(cardType) {
      let cards = [];
      switch(cardType)
      {
        case this.CardType.Column:
          cards = this.allColumnCards;
          break;
        case this.CardType.Database:
          cards = this.allDatabaseCards;
          break;
        case this.CardType.Function:
          cards = this.allFunctionCards;
          break;
        case this.CardType.Key:
          cards = this.allKeyCards;
          break;
        case this.CardType.Procedure:
          cards = this.allProcedureCards;
          break;
        case this.CardType.Table:
          cards = this.allTableCards;
          break;
        case this.CardType.View:
          cards = this.allViewCards;
          break;
      }

      /*
      for (let i = 0; i < cards.length; i++ ) {
      {
        let card = new CardModel();
        card.Schema = 'dbo';
        card.Table = 'T1' + i;
      // this.backend.getAll(CardModel).then( (cards: CardModel[]) => {
      //   this.logger.log(`Fetched ${cards.length} heroes.`);
        this.cards.push(card); // fill cache
      // });
      }
      //  console.log('Found ' + this.databases.length + ' cards');
      */
      return cards;
    }
}
