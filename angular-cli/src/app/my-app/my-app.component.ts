import { CardsFilterComponent } from './../ajuro.cards/ajuro.filter/ajuro.cards.filter.component';
import { PipesModule } from './../ajuro.pipes/pipes.module';
import { DataPresenterComponent } from './../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { GridAreaComponent } from './../ajuro.grid/ajuro.grid.area/ajuro.grid.area.component';
import { GridFilterComponent } from './../ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.component';
import { DataService } from './../ajuro.data/ajuro.data.service';
// import { CardsService } from '../ajuro.cards/ajuro.cards.service';
import { AjuroCardsModule } from './../ajuro.cards/ajuro.cards.module';
// import { CardsListComponent } from './../CardsModule';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RedComponentComponent } from '../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';
import { CardsListComponent } from '../ajuro.cards/ajuro.list/ajuro.cards.list.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-app.html',
    styleUrls: ['./my-app.css']
})
export class MyGridApplicationComponent implements OnInit {
  // SELECT CONCAT('INSERT INTO #tbl EXEC sp_helptext ''', SCHEMA_NAME(o.[schema_id]), '.', o.[name], '''; INSERT INTO #tbl SELECT ''GO----', SCHEMA_NAME(o.[schema_id]), '.', o.[name], ';'';') FROM sys.all_objects o

  static colors = ['#00FF00', '#FF0000', '#2020FF', '#FF0000'];

  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;
  @ViewChild(CardsFilterComponent) public cardsFilterComponentInstance: CardsFilterComponent;
  @ViewChild(CardsListComponent) public cardsListComponentInstance: CardsListComponent;
  @ViewChild(GridAreaComponent) public gridAreaComponentInstance: GridAreaComponent;
  @ViewChild(GridFilterComponent) public gridFilterComponentInstance: GridFilterComponent;
  // https://stackoverflow.com/questions/37100891/access-child-components-providers-in-angular2

    static that;
    static GenericPurposeIndex = 0;
    RequestsHistoryCards: FormGroup;
    TableCards: FormGroup;

    // TypeOnDisplay = 0;
    Tables;

    constructor(public dataService: DataService) {
      GridAreaComponent.that = this;
      DataService.LastType.subscribe((LastType) => {
        // MyGridApplicationComponent.that.TypeOnDisplay = LastType;
      });

      DataService.allCards.subscribe((allCards) => {
        if (typeof(allCards[0]) !== 'undefined') {
          if (allCards[0].length > 0) {
            Object.keys(allCards[0][0]).forEach(key => {
              let meta_renderer = null;
              if (key === 'ajuro_meta') {
                meta_renderer = function(params) {
                  let html_value = ``;
                  for (let i = 0; i < params.value.sources.length; i++) {
                    if (typeof(params.value.sources[i]) === 'undefined') {
                      continue;
                    }
                    html_value += `<span style='display: inline-block; background: black; border-radius: 50%; `;
                    html_value += `height: 16px; width: 16px; margin: 2px; background: radial-gradient(circle at 10px 10px,`;
                    html_value += MyGridApplicationComponent.colors[ params.value.sources[i] % MyGridApplicationComponent.colors.length ]
                     +  `, #000);'>` + params.value.sources[i] + `</span>`;
                  }
                  return '<span>' + html_value + '</span>';
                }
              }
            });
          }
        }
      });
    }

    ArchiveResponse(data) {
      const newEntry = new FormGroup({
      });
      this.RequestsHistoryCards.addControl(
        'R' + MyGridApplicationComponent.GenericPurposeIndex, newEntry
      );
      MyGridApplicationComponent.GenericPurposeIndex++;
      newEntry.addControl(
        'req', new FormGroup({
          fetch: new FormControl(),
          list: new FormControl(),
          select: new FormControl(),
          startTime: new FormControl()
        })
      );
      newEntry.addControl(
        'resp', new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl()
        })
      );
      (<FormControl>(<FormGroup>newEntry.controls['req']).controls['fetch']).setValue(data.post.fetch);
      (<FormControl>(<FormGroup>newEntry.controls['req']).controls['list']).setValue(data.post.list);
      (<FormControl>(<FormGroup>newEntry.controls['req']).controls['select']).setValue(data.post.select);
      (<FormControl>(<FormGroup>newEntry.controls['req']).controls['startTime']).setValue(data.post.startTime);
    };

    CrearHistory() {
      // const customersControls = <{ [key: string]: AbstractControl; }>this.RequestsHistoryCards.controls;
      Object.keys(this.RequestsHistoryCards.controls).forEach(key => {
        this.RequestsHistoryCards.removeControl(key);
      });
    };
    ClearCards() {
      // const customersControls = <{ [key: string]: AbstractControl; }>this.RequestsHistoryCards.controls;
      Object.keys(this.TableCards.controls).forEach(key => {
        this.TableCards.removeControl(key);
      });
    };

    AddHistory() {
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }
    SelectTable (data) {
      const tableIndex = parseInt(data.substring(2), 10);
      MyGridApplicationComponent.that.SelectedSchema = MyGridApplicationComponent.that.Tables.data[tableIndex].Schema;
      MyGridApplicationComponent.that.SelectedTable = MyGridApplicationComponent.that.Tables.data[tableIndex].Table;

      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Table);
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.View);
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Procedure);
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Function);
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Key);
    }
    GoBack() {
      // -- //
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }

    ngOnInit() {
      // console.log(DataService); // you got the service

      this.RequestsHistoryCards = new FormGroup({
        // Will hold all cards
      });
      this.TableCards = new FormGroup({
        // Will hold all cards
      });
    }
}

