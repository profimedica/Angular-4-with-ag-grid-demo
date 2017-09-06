import { CardsService } from '../cards/cards.service';
import { CardsModule } from './../cards/cards.module';
// import { CardsListComponent } from './../CardsModule';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RequestOptions, Headers} from '@angular/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {RedComponentComponent} from '../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';
import {GridOptions} from 'ag-grid/main';
import {HttpParams, HttpHeaders,  HttpClient} from '@angular/common/http';
import { CardsListComponent } from '../cards/list/cards.list.component';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent implements OnInit {
  @ViewChild(CardsListComponent) public cardsListComponentInstance: CardsListComponent
  // https://stackoverflow.com/questions/37100891/access-child-components-providers-in-angular2

    static that;
    static GenericPurposeIndex = 0;
    RequestsHistoryCards: FormGroup;
    TableCards: FormGroup;
    cardsService: CardsService;

    State = {
      'Init': 0,
      'Database': 1,
      'Table': 2
    };
    CurrentState = 0;
    Tables;
    SelectedConnection = 0;
    SelectedSchema = '';
    SelectedTable = '';
    gridOptions: GridOptions;
    columnDefs: any[];
    rowData: any[];

    constructor(private http: HttpClient) {
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
    AddCards(data) {
      for (let i = 0; i < data.data.length; i++ ) {
        /*
        const newEntry = new FormGroup({
        });
        this.TableCards.addControl(
          'TC' + i, newEntry
        );
        newEntry.addControl(
          'data', new FormGroup({
            name: new FormControl()
          })
        );
        (<FormControl>(<FormGroup>newEntry.controls['data']).controls['name']).setValue(data.data[i].Table);
        */
        this.rowData = data.data;
        this.Tables = data;
        console.log('Ansere succeded for ' + data.data.length + ' ' + data.post.list + ' cards');
        switch(data.post.list)
        {
          case 'columns':
            this.cardsListComponentInstance.cardsService.updateColumns(data.data);
            this.cardsListComponentInstance.UpdateColumnCards();
            break;
          case 'connections':
            this.cardsListComponentInstance.cardsService.updateDatabases(data.data);
            this.cardsListComponentInstance.UpdateDatabaseCards();
            break;
          case 'functions':
            this.cardsListComponentInstance.cardsService.updateFunctions(data.data);
            this.cardsListComponentInstance.UpdateFunctionCards();
            break;
          case 'keys':
            this.cardsListComponentInstance.cardsService.updateKeys(data.data);
            this.cardsListComponentInstance.UpdateKeyCards();
            break;
          case 'procedures':
            this.cardsListComponentInstance.cardsService.updateProcedures(data.data);
            this.cardsListComponentInstance.UpdateProcedureCards();
            break;
          case 'tables':
            this.cardsListComponentInstance.cardsService.updateTables(data.data);
            this.cardsListComponentInstance.UpdateTableCards();
            break;
          case 'views':
            this.cardsListComponentInstance.cardsService.updateViews(data.data);
            this.cardsListComponentInstance.UpdateViewCards();
            break;
      }
        // CardsService.updateDatabases(data.data);
      }
    };

    AddHistory() {
      this.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Database);
    }
    SelectTable (data) {
      const tableIndex = parseInt(data.substring(2), 10);
      MyGridApplicationComponent.that.SelectedSchema = MyGridApplicationComponent.that.Tables.data[tableIndex].Schema;
      MyGridApplicationComponent.that.SelectedTable = MyGridApplicationComponent.that.Tables.data[tableIndex].Table;
      MyGridApplicationComponent.that.CurrentState = MyGridApplicationComponent.that.State.Table;

      MyGridApplicationComponent.that.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Table);
      MyGridApplicationComponent.that.PostRequest(this.cardsListComponentInstance.cardsService.CardType.View);
      MyGridApplicationComponent.that.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Procedure);
      MyGridApplicationComponent.that.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Function);
      MyGridApplicationComponent.that.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Key);
    }
    GoBack() {
      MyGridApplicationComponent.that.CurrentState -= 2;
      if (MyGridApplicationComponent.that.CurrentState === MyGridApplicationComponent.that.State.Database) {
        MyGridApplicationComponent.that.ClearCards();
      }
      this.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Database);
    }

    PostRequest(CardType: number) {
      // Make the HTTP request:
      let params = {};

      switch ( CardType ) {
        case this.cardsListComponentInstance.cardsService.CardType.Column:
        params = {
          select: 'plain',
          list: 'columns',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          fetch: 'objects',
          filter: '%',
          startTime: '40839.925'
        };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.Database:
          params = {
            select: 'plain',
            list: 'connections',
            fetch: 'objects'
          };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.Function:
        params = {
          select: 'plain',
          list: 'functions',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          fetch: 'objects',
          filter: '%',
          startTime: '40839.925'
        };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.Key:
        params = {
          select: 'plain',
          list: 'keys',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          fetch: 'objects',
          filter: '%',
          startTime: '40839.925'
        };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.Procedure:
        params = {
          select: 'plain',
          list: 'procedures',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          fetch: 'objects',
          filter: '%',
          startTime: '40839.925'
        };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.Table:
        params = {
          select: 'plain',
          list: 'tables',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          fetch: 'objects',
          filter: '%',
          startTime: '40839.925'
        };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.View:
        params = {
          select: 'plain',
          list: 'views',
          database: 'chinook (SQLite)',
          connection: this.SelectedConnection,
          fetch: 'objects',
          filter: '%',
          startTime: '40839.925'
        };
        break;
        case this.cardsListComponentInstance.cardsService.CardType.Record:
          params = {
            select: 'plain',
            list: 'records',
            database: 'chinook (SQLite)',
            connection: this.SelectedConnection,
            schema: this.SelectedSchema,
            table: this.SelectedTable,
            fetch: 'objects',
            startTime: '40839.925'
          };
        break;
      }

      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers, params: params });
      this.http.post('http://localhost:86/my/api/index.php',
      params)
      .subscribe(data => {
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
      }, error => {
          console.log(JSON.stringify(error.json()));
      });
    }

    doSomething(row) {
      switch (MyGridApplicationComponent.that.CurrentState) {
        case MyGridApplicationComponent.that.State.Database:
        MyGridApplicationComponent.that.SelectedConnection = row.data.Id - 1;
        MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.cardsListComponentInstance.cardsService.CardType.Database);
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
      console.log(this.cardsListComponentInstance.cardsService); // you got the service

      this.RequestsHistoryCards = new FormGroup({
        // Will hold all cards
      });
      this.TableCards = new FormGroup({
        // Will hold all cards
      });
        this.PostRequest(this.cardsListComponentInstance.cardsService.CardType.Database);
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

