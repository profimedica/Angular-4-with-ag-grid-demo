import { CardsService } from './../cards/cards.service';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RequestOptions, Headers} from '@angular/http';
import { Component, Input, OnInit } from '@angular/core';
import {RedComponentComponent} from '../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
         MdTooltipModule, MdSidenavModule, MdTableModule, MaterialModule } from '@angular/material';
import {GridOptions} from 'ag-grid/main';
import {HttpParams, HttpHeaders,  HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent implements OnInit {

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

    selectedNavItem(item: number) {
      console.log('selected nav item ' + item);
      // this.cardsService.changeNav(item);
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
    AddTableCards(data) {
      for (let i = 0; i < data.data.length; i++ ) {
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
        this.rowData = data.data;
        this.Tables = data;
        // CardsService.updateDatabases(data.data);
        (<FormControl>(<FormGroup>newEntry.controls['data']).controls['name']).setValue(data.data[i].Table);
      }
    };

    AddHistory() {
      this.PostRequest(this.State.Init);
    }
    SelectTable (data) {
      const tableIndex = parseInt(data.substring(2), 10);
      MyGridApplicationComponent.that.SelectedSchema = MyGridApplicationComponent.that.Tables.data[tableIndex].Schema;
      MyGridApplicationComponent.that.SelectedTable = MyGridApplicationComponent.that.Tables.data[tableIndex].Table;
      MyGridApplicationComponent.that.CurrentState = MyGridApplicationComponent.that.State.Table;
      MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.CurrentState);
    }
    GoBack() {
      MyGridApplicationComponent.that.CurrentState -= 2;
      if (MyGridApplicationComponent.that.CurrentState === MyGridApplicationComponent.that.State.Database) {
        MyGridApplicationComponent.that.ClearCards();
      }
      this.PostRequest(MyGridApplicationComponent.that.CurrentState);
    }

    PostRequest(state: number) {
      // Make the HTTP request:
      let params = {};

      switch ( state ) {
        case this.State.Init:
          params = {
            select: 'plain',
            list: 'connections',
            fetch: 'objects'
          };
        break;
        case this.State.Database:
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
        case this.State.Table:
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
      this.http.post('http://localhost:86/mm/api/index.php',
      params)
      .subscribe(data => {
        this.ArchiveResponse(data);
        MyGridApplicationComponent.that.CurrentState++;

        if (MyGridApplicationComponent.that.CurrentState === MyGridApplicationComponent.that.State.Table) {
          MyGridApplicationComponent.that.AddTableCards(data);
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
          MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.CurrentState);
          break;
        case MyGridApplicationComponent.that.State.Table:
        MyGridApplicationComponent.that.SelectedSchema = row.data.Schema;
        MyGridApplicationComponent.that.SelectedTable = row.data.Table;
          MyGridApplicationComponent.that.PostRequest(MyGridApplicationComponent.that.CurrentState);
          break;
    }
    }

    ngOnInit() {

      this.RequestsHistoryCards = new FormGroup({
        // Will hold all cards
      });
      this.TableCards = new FormGroup({
        // Will hold all cards
      });
        this.PostRequest(this.State.Init);
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

