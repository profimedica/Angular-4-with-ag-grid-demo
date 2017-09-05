import { CardModel } from './../cards.model';
import { OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Component } from '@angular/core';

@Component({
 selector: 'app-cards-list',
 styleUrls: ['../cards.style.css'],
 template: `
    <div *ngFor="let itemz of cards">
       <div class='my_database_card object_tab_element'><span>{{itemz['Schema']}}</span>.<span>{{itemz['Table']}}</span></div>
    </div>
 `,
   providers: [CardsService]
})

export class CardsListComponent implements OnInit {
  cards: CardModel[];
  selectedCard: CardModel;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.getCards();
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}


// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
