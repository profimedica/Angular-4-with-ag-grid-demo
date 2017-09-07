import { DataService } from './../ajuro.data/ajuro.data.service';
import { CardsService } from '../ajuro.cards/ajuro.cards.service';
import { CardsModule } from './../ajuro.cards/ajuro.cards.module';
// import { CardsListComponent } from './../CardsModule';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RedComponentComponent } from '../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';
import { GridOptions } from 'ag-grid/main';
import { CardsListComponent } from '../ajuro.cards/ajuro.list/ajuro.cards.list.component';
import { DataPresenterComponent } from '../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent implements OnInit {
  @ViewChild(DataPresenterComponent) public dataPresenterComponentInstance: DataPresenterComponent;
  @ViewChild(CardsListComponent) public cardsListComponentInstance: CardsListComponent;
  // https://stackoverflow.com/questions/37100891/access-child-components-providers-in-angular2

    static that;
    static GenericPurposeIndex = 0;
    RequestsHistoryCards: FormGroup;
    TableCards: FormGroup;

    State = {
      'Init': 0,
      'Database': 1,
      'Table': 2
    };
    CurrentState = 0;
    Tables;
    gridOptions: GridOptions;
    columnDefs: any[];
    rowData: any[];

    constructor() {
      MyGridApplicationComponent.that = this;
        this.gridOptions = <GridOptions>{
          onRowDoubleClicked: this.doSomething
        };

        this.columnDefs = [
            {headerName: 'Database', field: 'Databwwase'},
            {headerName: 'Driver', field: 'Driver', cellRendererFramework: RedComponentComponent},
            {headerName: 'Hostname', field: 'Hostname'},
            {headerName: 'Id', field: 'Id'},
            {headerName: 'Name', field: 'Name'},
            {headerName: 'Port', field: 'Port'},
            {headerName: 'Username', field: 'Username'}
        ];

        this.rowData = [
          /*{
              Id: -2,
              Driver: 'NoDrv',
              Name: 'D2 (SQLite)',
              Database: '.\/DB\/chinook.db',
              Username: null,
              Hostname: 'l1',
              Port: '3306'
          },
          {
              Id: -1,
              Driver: 'NoDrv',
              Name: 'D1 (SQLite)',
              Database: '.\/DB\/chinook.db',
              Username: null,
              Hostname: 'l2',
              Port: '3306'
          }*/];
    }

    dataProcessCallback(data: Array<{}>) {
      this.ArchiveResponse(data);
      MyGridApplicationComponent.that.CurrentState++;

    MyGridApplicationComponent.that.AddCards(data);
    switch ( MyGridApplicationComponent.that.CurrentState ) {
      case MyGridApplicationComponent.that.State.Table:
        // MyGridApplicationComponent.that.AddCards(data);
        break;
    }

      const columns = [];
      if (data['data'].length > 0) {
        Object.keys(data['data'][0]).forEach(key => {
          columns.push({headerName: key, field: key});
        });
      }

      MyGridApplicationComponent.that.columnDefs = columns;
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
      this.rowData = data.data;
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
      this.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }
    SelectTable (data) {
      const tableIndex = parseInt(data.substring(2), 10);
      MyGridApplicationComponent.that.SelectedSchema = MyGridApplicationComponent.that.Tables.data[tableIndex].Schema;
      MyGridApplicationComponent.that.SelectedTable = MyGridApplicationComponent.that.Tables.data[tableIndex].Table;
      MyGridApplicationComponent.that.CurrentState = MyGridApplicationComponent.that.State.Table;

      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Table);
      MyGridApplicationComponent.that.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.View);
      MyGridApplicationComponent.that.PostRequest(DataService.CardType.Procedure);
      MyGridApplicationComponent.that.PostRequest(DataService.CardType.Function);
      MyGridApplicationComponent.that.PostRequest(DataService.CardType.Key);
    }
    GoBack() {
      MyGridApplicationComponent.that.CurrentState -= 2;
      if (MyGridApplicationComponent.that.CurrentState === MyGridApplicationComponent.that.State.Database) {
        MyGridApplicationComponent.that.ClearCards();
      }
      this.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
    }

    UpdateTable() {
      /*for (let i = 0; i < data.data.length; i++ ) {
        this.rowData = data.data;
        this.Tables = data;
      }*/
    }

    doSomething(row) {
      switch (MyGridApplicationComponent.that.CurrentState) {
        case MyGridApplicationComponent.that.State.Database:
        MyGridApplicationComponent.that.SelectedConnection = row.data.Id - 1;
        MyGridApplicationComponent.that.PostRequest(DataService.CardType.Database);
        break;
        case MyGridApplicationComponent.that.State.Table:
        MyGridApplicationComponent.that.SelectedSchema = row.data.Schema;
        MyGridApplicationComponent.that.SelectedTable = row.data.Table;
        MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.cardsListComponentInstance.cardsService.CardType.Table);
        MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.cardsListComponentInstance.cardsService.CardType.View);
        MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.cardsListComponentInstance.cardsService.CardType.Procedure);
        // MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.cardsListComponentInstance.cardsService.CardType.Function);
        MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.cardsListComponentInstance.cardsService.CardType.Key);
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
       this.dataPresenterComponentInstance.dataService.PostRequest(DataService.CardType.Database);
       this.cardsListComponentInstance.UpdateDatabaseCards();
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

