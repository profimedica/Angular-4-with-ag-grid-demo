import { DataService } from './../ajuro.data/ajuro.data.service';
/*import { Observable } from 'rxjs/Rx';
*/
import { Injectable } from '@angular/core';
import { CardModel } from './ajuro.cards.model';

@Injectable()
export class CardsService {

  // Object types that can be requested
  public CardType = {
    'Record': 0,
    'Database': 1,
    'Table': 2,
    'View': 3,
    'Column': 4,
    'Key': 5,
    'Procedure': 6,
    'Function': 7
};
  private allCards: any;

  constructor() { }

  getCards(cardType) {
    // return this.dataService.allCards[cardType];
  }
}
