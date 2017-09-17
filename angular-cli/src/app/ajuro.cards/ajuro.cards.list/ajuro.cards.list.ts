import { DataService } from './../../ajuro.data/ajuro.data.service';
import { DataPresenterComponent } from './../../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { Observable } from 'rxjs/observable';
import { CardModel } from './../ajuro.cards.model';
import { OnInit, ViewChild } from '@angular/core';
// import { CardsService } from '../ajuro.cards.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  styleUrls: ['../ajuro.cards.style.css'],
  templateUrl: './ajuro.cards.list.html',
  providers: [DataService]
})

export class CardsListComponent implements OnInit {
  static that: CardsListComponent;
  FilterValue: string;

  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;

  allColumnCards: Array<CardModel>;
  allFunctionCards: Array<CardModel>;
  allKeyCards: Array<CardModel>;
  allProcedureCards: Array<CardModel>;
  allTableCards: Array<CardModel>;
  allViewCards: Array<CardModel>;
  selectedCard: CardModel;

  constructor(public dataService: DataService) {
    CardsListComponent.that = this;
    this.allColumnCards = new Array<CardModel>();
    this.allFunctionCards = new Array<CardModel>();
    this.allKeyCards = new Array<CardModel>();
    this.allProcedureCards = new Array<CardModel>();
    this.allTableCards = new Array<CardModel>();
    this.allViewCards = new Array<CardModel>();

    DataService.cardsFilterValue.subscribe((newFilterValue) => {
      this.FilterValue = newFilterValue;
    });

    DataService.allCards.subscribe((allCards) => {
      this.allColumnCards = allCards[DataService.CardType.Column];
      this.allFunctionCards = allCards[DataService.CardType.Function];
      this.allKeyCards = allCards[DataService.CardType.Key];
      this.allProcedureCards = allCards[DataService.CardType.Procedure];
      if (typeof(allCards[DataService.CardType.Table]) !== 'undefined') {
        CardsListComponent.that.allTableCards = allCards[DataService.CardType.Table];
      }
      this.allViewCards = allCards[DataService.CardType.View];
    });
   }

   PreviewColumn(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Column, id, DataService.RequestType.Tag);
   }
   PreviewFunction(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Function, id, DataService.RequestType.Tag);
   }
   PreviewKey(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Key, id, DataService.RequestType.Tag);
   }
   PreviewProcedure(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Procedure, id, DataService.RequestType.Tag);
   }
   PreviewTable(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Table, id, DataService.RequestType.Tag);
   }
   PreviewView(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.View, id, DataService.RequestType.Tag);
   }
   NavigateToColumn(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Column, id, DataService.RequestType.Data);
   }
   NavigateToFunction(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Function, id, DataService.RequestType.Data);
   }
   NavigateToKey(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Key, id, DataService.RequestType.Data);
   }
   NavigateToProcedure(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Procedure, id, DataService.RequestType.Data);
   }
   NavigateToTable(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.Record, id, DataService.RequestType.Data);
   }
   NavigateToView(id) {
    CardsListComponent.that.dataPresenterComponentInstance.dataService
      .PostRequest(DataService.CardType.View, id, DataService.RequestType.Data);
   }

  ngOnInit() {
    this.allFunctionCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Function];
    this.allKeyCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Key];
    this.allProcedureCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Procedure];
    this.allTableCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.Table];
    this.allViewCards = this.dataPresenterComponentInstance.dataService.allCards[DataService.CardType.View];
  }

  selectCard(card: CardModel) { this.selectedCard = card; }


   columnOver() {
  /*
  if(ControlKeyIsPressed || (field_name && field_name[0] == '_'))
    {
      return;
    }
    CurrentDatabase = database_name;
    CurrentSchema = schema_name;
    CurrentTable = object_name;
    if(object_type !== 'undefined')
    {
      CurrentObjectType = object_type;
    }
    CurrentColumn = field_name;
    if(object_type != 'Key')
    {
      if(value)
      {
        $('#CodeSample').show();
        $('#CodeSample').html(value);
        DisplayOnly('Code');
      }
      else
      {
        if(! object_type == 'Column')
        {
          DisplayOnly('Table');
        }
        else
        {
          DisplayOnly('FloatingObjects');
        }
        //$('#CodeSample').hide();
      }
    }

    var object_status = { marker: '<b style="color:#CCC" onclick="PinObject(\''+database_name+'\', \''+database_index+'\', \''+schema_name+'\', \''+object_type+'\', \''+object_name+'\', \''+field_name+'\', \''+value+'\', \''+parent_object_name+'\', \''+parent_field_name+'\')">*</b> ' };


    if(object_type == 'Key')
    {
      $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">Key: </span>' + schema_name + '.' + object_name + '<i style="color:red">\'s</i> ' + parent_object_name + ' [<b style="color:blue">' + field_name +'</b> = <b style="color:blue">' + parent_field_name +'</b>]');
    }
    else if(field_name)
    {
      $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">Column: </span>' + schema_name + '.' + object_name + '.<b style="color:blue">' + field_name +'</b>');
    }
    else if(object_name)
    {
      $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">' + object_type + ': </span>' + schema_name + '.<b style="color:blue">' + object_name +'</b>');
    }
    else
    {
      $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">Database: </span><b style="color:blue">' + database_name +'</b>');
    }
    GetDatabaseObjectDescription(database_name, schema_name, object_type, object_name, field_name, null);*/
}
}
// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
