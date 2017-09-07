import { Observable } from 'rxjs/observable';
import { CardModel } from './../ajuro.cards.model';
import { OnInit } from '@angular/core';
import { CardsService } from '../ajuro.cards.service';
import { Component } from '@angular/core';

@Component({
 selector: 'app-cards-list',
 styleUrls: ['../ajuro.cards.style.css'],
 template: `
  <div *ngFor="let itemz of allDatabaseCards">
    <div class='my_database_card object_tab_element'
      (dblclick)="ColumnNavigate(itemz['Name'], itemz['Id'])">
      <span>{{itemz['Driver']}}</span>.
      <span>{{itemz['Name']}}</span>
    </div>
  </div>
  <div *ngFor="let itemz of allTableCards">
    <div class='my_table_card object_tab_element'><span>{{itemz['Schema']}}</span>.<span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allViewCards">
    <div class='my_view_card object_tab_element'><span>{{itemz['Schema']}}</span>.<span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allColumnCards">
    <div class='my_column_card object_tab_element'><span>{{itemz['Schema']}}</span>.<span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allProcedureCards">
    <div class='my_procedure_card object_tab_element'><span>{{itemz['Schema']}}</span>.<span>{{itemz['Name']}}</span></div>
  </div>
  <div *ngFor="let itemz of allFunctionCards">
    <div class='my_function_card object_tab_element'><span>{{itemz['Schema']}}</span>.<span>{{itemz['Table']}}</span></div>
  </div>
  <div *ngFor="let itemz of allKeyCards">
    <div class='my_key_card object_tab_element'><span>{{itemz['ParentTable']}}</span>.<span>{{itemz['ParentColumn']}}</span> <span>{{itemz['ChildTable']}}</span>.<span>{{itemz['ChildColumn']}}</span></div>
  </div>
`,
   providers: [CardsService]
})

export class CardsListComponent implements OnInit {
  allColumnCards: Array<CardModel>;
  allDatabaseCards: Array<CardModel>;
  allFunctionCards: Array<CardModel>;
  allKeyCards: Array<CardModel>;
  allProcedureCards: Array<CardModel>;
  allTableCards: Array<CardModel>;
  allViewCards: Array<CardModel>;
  selectedCard: CardModel;

  constructor(public cardsService: CardsService) {
    this.allColumnCards = new Array<CardModel>();
    this.allDatabaseCards = new Array<CardModel>();
    this.allFunctionCards = new Array<CardModel>();
    this.allKeyCards = new Array<CardModel>();
    this.allProcedureCards = new Array<CardModel>();
    this.allTableCards = new Array<CardModel>();
    this.allViewCards = new Array<CardModel>();
   }

   ColumnNavigate(name, index) {
    console.log('DblClicked: ' + name + index);
   }

  ngOnInit() {
    this.allColumnCards = this.cardsService.getCards(this.cardsService.CardType.Column);
    this.allDatabaseCards = this.cardsService.getCards(this.cardsService.CardType.Database);
    this.allFunctionCards = this.cardsService.getCards(this.cardsService.CardType.Function);
    this.allKeyCards = this.cardsService.getCards(this.cardsService.CardType.Key);
    this.allProcedureCards = this.cardsService.getCards(this.cardsService.CardType.Procedure);
    this.allTableCards = this.cardsService.getCards(this.cardsService.CardType.Table);
    this.allViewCards = this.cardsService.getCards(this.cardsService.CardType.View);
    /*
    this.getRecentDetections();
    const timer = Observable.timer(2000, 5000);
    timer.subscribe(() => this.getRecentDetections());
    // this.cards = this.cardsService.getCards();
    */
  }

  public UpdateColumnCards(): void {
    this.allColumnCards = this.cardsService.getCards(this.cardsService.CardType.Column);
    console.log('Found ' + this.allColumnCards.length + ' columns.')
    /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }
  public UpdateDatabaseCards(): void {
    this.allDatabaseCards = this.cardsService.getCards(this.cardsService.CardType.Database);
    console.log('Found ' + this.allDatabaseCards.length + ' databases.')
       /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }
  public UpdateFunctionCards(): void {
    this.allFunctionCards = this.cardsService.getCards(this.cardsService.CardType.Function);
    console.log('Found ' + this.allFunctionCards.length + ' functions.')
    /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }
  public UpdateKeyCards(): void {
    this.allKeyCards = this.cardsService.getCards(this.cardsService.CardType.Key);
    console.log('Found ' + this.allKeyCards.length + ' keys.')
    /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }
  public UpdateProcedureCards(): void {
    this.allProcedureCards = this.cardsService.getCards(this.cardsService.CardType.Procedure);
    console.log('Found ' + this.allProcedureCards.length + ' procedures.')
    /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }
  public UpdateTableCards(): void {
    this.allTableCards = this.cardsService.getCards(this.cardsService.CardType.Table);
    console.log('Found ' + this.allTableCards.length + ' tables.')
    /* .subscribe(recent => {
             this.zone.run(() => { // <== added
                 this.cards = recent;
                 // console.log(this.cards[0].Name)
             });
    });*/
  }
  public UpdateViewCards(): void {
    this.allViewCards = this.cardsService.getCards(this.cardsService.CardType.View);
    console.log('Found ' + this.allViewCards.length + ' views.')
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
