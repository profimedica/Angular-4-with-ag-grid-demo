import { DataService } from './../../ajuro.data/ajuro.data.service';
import { DataPresenterComponent } from './../../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { Observable } from 'rxjs/observable';
import { CardModel } from './../ajuro.cards.model';
import { OnInit, ViewChild } from '@angular/core';
// import { CardsService } from '../ajuro.cards.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-sources',
  styleUrls: ['../ajuro.cards.style.css'],
  templateUrl: './ajuro.cards.sources.html',
  providers: [DataService]
})

export class CardsSourcesComponent implements OnInit {
  static that: CardsSourcesComponent;
  FilterValue: string;

  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;

  allDatabaseCards: Array<CardModel>;
  selectedCard: CardModel;

  constructor(public dataService: DataService) {
    CardsSourcesComponent.that = this;
    this.allDatabaseCards = new Array<CardModel>();

    DataService.cardsFilterValue.subscribe((newFilterValue) => {
      this.FilterValue = newFilterValue;
    });

    DataService.allCards.subscribe((allCards) => {
      this.allDatabaseCards = allCards[DataService.CardType.Database];
    });
   }

   NavigateToDatabase(id) {
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Table, id, DataService.RequestType.Data);
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.View, id, DataService.RequestType.Data);
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Column, id, DataService.RequestType.Data);
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Function, id, DataService.RequestType.Data);
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Procedure, id, DataService.RequestType.Data);
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Procedure, id, DataService.RequestType.Data);
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Procedure, id, DataService.RequestType.Data);
   }

  ngOnInit() {
    this.allDatabaseCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Database];
  }

  ToggleDatabase(id) {
    CardsSourcesComponent.that.dataPresenterComponentInstance.dataService
    .toggleConnection(id, true);
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}
