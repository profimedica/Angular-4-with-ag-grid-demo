import { DataService } from './../../ajuro.data/ajuro.data.service';
import { DataPresenterComponent } from './../../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { Observable } from 'rxjs/observable';
import { CardModel } from './../ajuro.cards.model';
import { OnInit, ViewChild } from '@angular/core';
import { CardsService } from '../ajuro.cards.service';
import { Component } from '@angular/core';

@Component({
 selector: 'app-cards-list',
 styleUrls: ['../ajuro.cards.style.css'],
 template: `
 <app-data-provider></app-data-provider>
  <div *ngFor="let itemz of allDatabaseCards; let i = index">
    <div class='my_database_card object_tab_element'
      id="{{i}}"
      (dblclick)="NavigateToDatabase(i)">
      <span>{{itemz['Driver']}}</span>.
      <span>{{itemz['Name']}}</span>
    </div>
  </div>
  <div *ngFor="let itemz of allTableCards; let i = index">
    <div class='my_table_card object_tab_element'
    (dblclick)="NavigateToTable(i)">
    <span>{{itemz['Schema']}}</span>.
    <span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allViewCards; let i = index">
    <div class='my_view_card object_tab_element'
    (dblclick)="NavigateToView(i)">
    <span>{{itemz['Schema']}}</span>.
    <span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allColumnCards; let i = index">
    <div class='my_column_card object_tab_element'
    (dblclick)="NavigateToColumn(i)">
    <span>{{itemz['Schema']}}</span>.
    <span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allProcedureCards; let i = index">
    <div class='my_procedure_card object_tab_element'
    (dblclick)="NavigateToProcedure(i)">
    <span>{{itemz['Schema']}}</span>.
    <span>{{itemz['Name']}}</span></div>
  </div>
  <div *ngFor="let itemz of allFunctionCards; let i = index">
    <div class='my_function_card object_tab_element'
    (dblclick)="NavigateToFunction(i)">
    <span>{{itemz['Schema']}}</span>.
    <span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allKeyCards; let i = index">
    <div class='my_key_card object_tab_element'
    (dblclick)="NavigateToKey(i)">
    <span>{{itemz['ParentTable']}}</span>.
    <span>{{itemz['ParentColumn']}}</span> 
    <span>{{itemz['ChildTable']}}</span>.
    <span>{{itemz['ChildColumn']}}</span></div>
  </div>
`,
   providers: [DataService]
})

export class CardsListComponent implements OnInit {
  static that: CardsListComponent;
  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;

  allColumnCards: Array<CardModel>;
  allDatabaseCards: Array<CardModel>;
  allFunctionCards: Array<CardModel>;
  allKeyCards: Array<CardModel>;
  allProcedureCards: Array<CardModel>;
  allTableCards: Array<CardModel>;
  allViewCards: Array<CardModel>;
  selectedCard: CardModel;

  constructor(public dataService: DataService) {
    CardsListComponent.that = this; 
    this.allColumnCards = new Array<CardModel>();
    this.allDatabaseCards = new Array<CardModel>();
    this.allFunctionCards = new Array<CardModel>();
    this.allKeyCards = new Array<CardModel>();
    this.allProcedureCards = new Array<CardModel>();
    this.allTableCards = new Array<CardModel>();
    this.allViewCards = new Array<CardModel>();

    DataService.allCards.subscribe((allCards) => {
      this.allColumnCards = allCards[DataService.CardType.Column];
      this.allDatabaseCards = allCards[DataService.CardType.Database];
      this.allFunctionCards = allCards[DataService.CardType.Function];
      this.allKeyCards = allCards[DataService.CardType.Key];
      this.allProcedureCards = allCards[DataService.CardType.Procedure];
      this.allTableCards = allCards[DataService.CardType.Table];
      this.allViewCards = allCards[DataService.CardType.View];
    });
   }

   NavigateToColumn(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Column, id);
   }
   NavigateToDatabase(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Table, id);
   }
   NavigateToFunction(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Function, id);
   }
   NavigateToKey(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Key, id);
   }
   NavigateToProcedure(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Procedure, id);
   }
   NavigateToTable(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Record, id);
   }
   NavigateToView(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.View, id);
   }

  ngOnInit() {
    this.allDatabaseCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Database];
    this.allFunctionCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Function];
    this.allKeyCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Key];
    this.allProcedureCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Procedure];
    this.allTableCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Table];
    this.allViewCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.View];
  }

  selectCard(card: CardModel) { this.selectedCard = card; }
}


// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
