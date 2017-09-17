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
  ObjectPathValue = 'Please select a database';
  ObjectPathHTML = '';
  preview_card_type;
  preview_card_schema;
  preview_card_table;
  preview_card_column;
  DescriptionValue: string;
  cards: CardModel[];
  selectedCard: CardModel;

  constructor(private dataService: DataService) {
    DataService.cardPreviewDescription.subscribe((newDescriptionValue) => {
      this.DescriptionValue = newDescriptionValue;
    });
    DataService.SelectedCard.subscribe((card) => {
      let type: string;
      switch (card['CardType']) {
        case DataService.CardType.Column:
        type = 'Column';
        break;
        case DataService.CardType.Database:
        type = 'Database';
        break;
        case DataService.CardType.Function:
        type = 'Function';
        break;
        case DataService.CardType.Key:
        type = 'Key';
        break;
        case DataService.CardType.Procedure:
        type = 'Procedure';
        break;
        case DataService.CardType.Record:
        type = 'Record';
        break;
        case DataService.CardType.Table:
        type = 'Table';
        break;
        case DataService.CardType.View:
        type = 'View';
        break;
      }
      if (card['CardData'] != null) {
        this.preview_card_type = type;
        this.preview_card_schema = card['CardData']['Schema'];
        this.preview_card_table = card['CardData']['Table'];
      }
      if (card['CardData'] != null && card['CardData'].hasOwnProperty('Column')) {
        this.preview_card_column = card['CardData']['Column'];
      } else {
        this.preview_card_column = '';
      }
      this.ObjectPathValue = JSON.stringify(card['CardData']);
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
