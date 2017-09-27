import { PipesModule } from './../../ajuro.pipes/pipes.module';
import { DataPresenterComponent } from './../../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { DataService } from './../../ajuro.data/ajuro.data.service';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RedComponentComponent } from '../../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';
// import { GridOptions } from 'ag-grid/main';
import { GridOptions } from 'ajuro-ui/main';

@Component({
    selector: 'app-grid-area',
    templateUrl: './ajuro.grid.area.html',
    styleUrls: ['./../ajuro.grid.style.css'],
    providers: [DataService]
})
export class GridAreaComponent implements OnInit {
  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;


  static colors = ['#00FF00', '#FF0000', '#2020FF', '#FF0000'];
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
        onRowDoubleClicked: this.doSomething,
        defaultColDef: {
          filter: 'text',
          filterParams: {
              newRowsAction: 'keep'
          },
          allowedAggFuncs: ['sum','min','max','bollocks']
        },
        enableColResize: true,
       // rowModelType: 'enterprise',
        rowGroupPanelShow: 'always',
        animateRows: true,
        showToolPanel: true,
        enableSorting: true,
        suppressDragLeaveHidesColumns: true,
        debug: true
      };

      DataService.LastType.subscribe((LastType) => {
        GridAreaComponent.that.TypeOnDisplay = LastType;
      });

      DataService.allCards.subscribe((allCards) => {
        const columns = [];
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
                   // html_value += `<span class='ajuro_circle' style='background: radial-gradient(circle at 5px 5px, `
                   // + MyGridApplicationComponent.colors[ element % MyGridApplicationComponent.colors.length ] +  `, #000);'></span>`;
                    html_value += `<span style='display: inline-block; background: black; border-radius: 50%; height: 16px; width: 16px; margin: 2px; background: radial-gradient(circle at 10px 10px, `
                     + GridAreaComponent.colors[ params.value.sources[i] % GridAreaComponent.colors.length ] +  `, #000);'>` + params.value.sources[i] + `</span>`;
                  }
                  return '<span>' + html_value + '</span>';
                };
                columns.push({headerName: 'DB', field: key, cellRenderer: meta_renderer});
              }
            });
            Object.keys(allCards[0][0]).forEach(key => {
              let meta_renderer = null;
              if (key !== 'ajuro_meta') {
                columns.push({headerName: key, field: key});
              }
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
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Database, null, DataService.RequestType.Data);
    }
    SelectTable (data) {
      const tableIndex = parseInt(data.substring(2), 10);
      GridAreaComponent.that.SelectedSchema = GridAreaComponent.that.Tables.data[tableIndex].Schema;
      GridAreaComponent.that.SelectedTable = GridAreaComponent.that.Tables.data[tableIndex].Table;

      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Table, null, DataService.RequestType.Data);
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.View, null, DataService.RequestType.Data);
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Procedure, null, DataService.RequestType.Data);
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Function, null, DataService.RequestType.Data);
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Key, null, DataService.RequestType.Data);
    }
    GoBack() {
      // -- //
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Database, null, DataService.RequestType.Data);
    }

    UpdateTable() {
      /*for (let i = 0; i < data.data.length; i++ ) {
        this.rowData = data.data;
        this.Tables = data;
      }*/
    }

    doSomething(row) {
      switch (GridAreaComponent.that.TypeOnDisplay) {/*
        case -1:
        GridAreaComponent.that.dataService
        .PostRequest(DataService.CardType.Database, row.rowIndex);
        break;
        case DataService.CardType.Database:
        GridAreaComponent.that.SelectedSchema = row.data.Schema;
        GridAreaComponent.that.SelectedTable = row.data.Table;
        GridAreaComponent.that.dataService
        .PostRequest(DataService.CardType.Table, row.rowIndex);
        console.log('Teststskdfk--------------------');
        GridAreaComponent.that.dataService.
        PostRequest(DataService.CardType.View, row.rowIndex);
        GridAreaComponent.that.dataService.
        PostRequest(DataService.CardType.Procedure, row.rowIndex);
        GridAreaComponent.that.dataService.
        PostRequest(DataService.CardType.Key, row.rowIndex);
        break;
        case DataService.CardType.Column:
        case DataService.CardType.Function:
        case DataService.CardType.Key:
        case DataService.CardType.Procedure:
        case DataService.CardType.Key:
        case DataService.CardType.View:*/
        case DataService.CardType.Table:
        GridAreaComponent.that.dataService.
        PostRequest(DataService.CardType.Record, row.rowIndex, DataService.RequestType.Data);
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
      GridAreaComponent.that.dataService.PostRequest(DataService.CardType.Database, null, DataService.RequestType.Data);
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

