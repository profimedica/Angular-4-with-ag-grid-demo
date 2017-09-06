/*import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';*/
import { CardModel } from './cards.model';

/*@Injectable()*/
export class CardsService {
  private databases: CardModel[] = [];

  constructor(
    // private backend: BackendService,
    // private logger: Logger
  ) { }

  public updateTables(data: any) {
    this.databases = data;
  }

  public updateDatabases(data) {
    this.databases = [];
    for (let i = 0; i < data.length; i++ ) {
      this.databases.push(data[i]);
    }
    console.log('Added ' + this.databases.length + ' cards');
  }

  getCards() {
    /*for (let i = 0; i < this.databases.length; i++ ) {
    {
      let card = new CardModel();
      card.Schema = 'dbo';
      card.Table = 'T1' + i;
    // this.backend.getAll(CardModel).then( (cards: CardModel[]) => {
    //   this.logger.log(`Fetched ${cards.length} heroes.`);
      this.cards.push(card); // fill cache
    // });
    }*/
    console.log('Found ' + this.databases.length + ' cards');
    return this.databases;
  }
}
