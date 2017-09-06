import { Observable } from 'rxjs/observable';
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
  cards: Array<CardModel>;
  selectedCard: CardModel;

  constructor(public cardsService: CardsService) {
    this.cards = new Array<CardModel>();
   }

  ngOnInit() {
    this.getRecentDetections();
    /*const timer = Observable.timer(2000, 5000);
    timer.subscribe(() => this.getRecentDetections());*/
    // this.cards = this.cardsService.getCards();
  }

  public getRecentDetections(): void {
    this.cards = this.cardsService.getCards();
       /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}


// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
