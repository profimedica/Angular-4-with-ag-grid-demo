import { CardsFilterComponent } from './../../ajuro.cards/ajuro.filter/ajuro.cards.filter.component';
import { PipesModule } from './../../ajuro.pipes/pipes.module';
import { DataPresenterComponent } from './../../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { DataService } from './../../ajuro.data/ajuro.data.service';
// import { CardsService } from '../ajuro.cards/ajuro.cards.service';
import { AjuroCardsModule } from './../../ajuro.cards/ajuro.cards.module';
// import { CardsListComponent } from './../CardsModule';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RedComponentComponent } from '../../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';
import { GridOptions } from 'ag-grid/main';
import { CardsListComponent } from '../../ajuro.cards/ajuro.list/ajuro.cards.list.component';

@Component({
    selector: 'app-grid-area',
    templateUrl: './ajuro.grid.area.html',
    styleUrls: ['./ajuro.grid.area.component.css']
})
export class GridAreaComponent implements OnInit {
  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;
  @ViewChild(CardsFilterComponent) public cardsFilterComponentInstance: CardsFilterComponent;
  @ViewChild(CardsListComponent) public cardsListComponentInstance: CardsListComponent;
  // https://stackoverflow.com/questions/37100891/access-child-components-providers-in-angular2

    static that;
    static GenericPurposeIndex = 0;
    RequestsHistoryCards: FormGroup;
    TableCards: FormGroup;

    TypeOnDisplay = 0;
    Tables;
    gridOptions: GridOptions;
    columnDefs: any[];
    rowData: any[];

    constructor(public dataService: DataService) {
      GridAreaComponent.that = this;
        this.gridOptions = <GridOptions>{
          onRowDoubleClicked: this.doSomething
        };

      DataService.LastType.subscribe((LastType) => {
        GridAreaComponent.that.TypeOnDisplay = LastType;
      });

      DataService.allCards.subscribe((allCards) => {
        const columns = [];
        if (typeof(allCards[0]) !== 'undefined') {
          if (allCards[0].length > 0) {
            Object.keys(allCards[0][0]).forEach(key => {
              columns.push({headerName: key, field: key});
            });
          }
        }

        GridAreaComponent.that.columnDefs = columns;

        this.rowData = allCards[0];
      });
    }

    ArchiveResponse(data) {
      const newEntry = new FormGroup({
      });
      this.RequestsHistoryCards.addControl(
        'R' + GridAreaComponent.GenericPurposeIndex, newEntry
      );
      GridAreaComponent.GenericPurposeIndex++;
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
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }
    SelectTable (data) {
      const tableIndex = parseInt(data.substring(2), 10);
      GridAreaComponent.that.SelectedSchema = GridAreaComponent.that.Tables.data[tableIndex].Schema;
      GridAreaComponent.that.SelectedTable = GridAreaComponent.that.Tables.data[tableIndex].Table;

      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Table);
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.View);
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Procedure);
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Function);
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Key);
    }
    GoBack() {
      // -- //
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }

    UpdateTable() {
      /*for (let i = 0; i < data.data.length; i++ ) {
        this.rowData = data.data;
        this.Tables = data;
      }*/
    }

    doSomething(row) {
      switch (GridAreaComponent.that.TypeOnDisplay) {
        case -1:
        GridAreaComponent.that.dataService
        .PostRequest(DataService.CardType.Database, row.rowIndex);
        break;
        case DataService.CardType.Database:
        GridAreaComponent.that.SelectedSchema = row.data.Schema;
        GridAreaComponent.that.SelectedTable = row.data.Table;
        GridAreaComponent.that.dataPresenterComponentInstance.dataService
        .PostRequest(DataService.CardType.Table, row.rowIndex);
        GridAreaComponent.that.dataPresenterComponentInstance.dataService.
        PostRequest(DataService.CardType.View, row.rowIndex);
        GridAreaComponent.that.dataPresenterComponentInstance.dataService.
        PostRequest(DataService.CardType.Procedure, row.rowIndex);
        GridAreaComponent.that.dataPresenterComponentInstance.dataService.
        PostRequest(DataService.CardType.Key, row.rowIndex);
        break;
        case DataService.CardType.Column:
        case DataService.CardType.Function:
        case DataService.CardType.Key:
        case DataService.CardType.Procedure:
        case DataService.CardType.Key:
        case DataService.CardType.View:
        case DataService.CardType.Table:
        GridAreaComponent.that.dataService.
        PostRequest(DataService.CardType.Record, row.rowIndex);
        break;
      }
    }

    ngOnInit() {
      // console.log(DataService); // you got the service

      this.RequestsHistoryCards = new FormGroup({
        // Will hold all cards
      });
      this.TableCards = new FormGroup({
        // Will hold all cards
      });
      GridAreaComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }

    GetData() {
      // http://localhost:85/my/api/index.php
      // select=plain
      // list=records
      // database=chinook+(SQLite)
      // connection=0
      // schema=default
      // table=playlists
      // fetch=objects
      // startTime=58442.44
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

