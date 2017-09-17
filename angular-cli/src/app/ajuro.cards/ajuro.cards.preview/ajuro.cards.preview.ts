import { DataService } from './../../ajuro.data/ajuro.data.service';
import { OnInit } from '@angular/core';
import { CardModel } from '../ajuro.cards.model';
import { Component } from '@angular/core';

@Component({
 selector: 'app-card-preview',
 styleUrls: ['../ajuro.cards.style.css'],
 templateUrl: './ajuro.cards.preview.html',
 providers: [DataService]
})

export class CardsPreviewComponent implements OnInit {
  DescriptionValue: string;
  cards: CardModel[];
  selectedCard: CardModel;

  constructor(private dataService: DataService) {
    DataService.cardPreviewDescription.subscribe((newDescriptionValue) => {
      this.DescriptionValue = newDescriptionValue;
    });
  }

  decriptionChanged(event) {
    DataService.cardPreviewDescription.next(this.DescriptionValue);
  }

  ngOnInit() {
    // this.cards = this.cardsService.getCards();
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}
