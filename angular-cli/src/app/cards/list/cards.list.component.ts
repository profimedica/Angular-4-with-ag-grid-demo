import {Subscription} from 'rxjs/Subscription';
import { CardModel } from './../cards.model';
import { OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Component } from '@angular/core';


@Component({
 selector: 'app-cards-list',
 styleUrls: ['../cards.style.css'],
 templateUrl: './cards.list.template.html',
   providers: [CardsService]
})

export class CardsListComponent implements OnInit {
  item: number;
  subscription:Subscription;
  cards: CardModel[];
  selectedCard: CardModel;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.getCards();
    this.subscription = this.cardsService.navItem.subscribe(item => this.item = item)
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}


// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
