import { DataService } from './../../ajuro.data/ajuro.data.service';
import { OnInit } from '@angular/core';
import { CardModel } from '../ajuro.cards.model';
import { Component } from '@angular/core';

@Component({
 selector: 'app-cards-filter',
 styleUrls: ['../ajuro.cards.style.css'],
 templateUrl: './ajuro.cards.filter.html',
 providers: [DataService]
})

export class CardsFilterComponent implements OnInit {
  FilterValue: string;
  cards: CardModel[];
  selectedCard: CardModel;

  constructor(private dataService: DataService) { }

  filterChanged(event) {
    DataService.cardsFilterValue.next(this.FilterValue);
  }

  ngOnInit() {
    // this.cards = this.cardsService.getCards();
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}


// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
