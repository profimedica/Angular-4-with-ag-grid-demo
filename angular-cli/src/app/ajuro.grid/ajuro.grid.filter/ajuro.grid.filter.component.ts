import { DataService } from './../../ajuro.data/ajuro.data.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FilterModel } from './../FilterModel';

@Component({
 selector: 'app-grid-filter',
 styleUrls: ['../ajuro.grid.style.css'],
 templateUrl: './ajuro.grid.filter.html',
 providers: [DataService]
})

export class GridFilterComponent implements OnInit {
  public GridFilterValue: string;
  public GridFilters: Array<FilterModel>;

  constructor(private dataService: DataService) {
    this.GridFilterValue = '';
    this.GridFilters = new Array<FilterModel>()
    // Dummy Filters
    let filter = new FilterModel();
    filter.ColumnName = 'Main';
    filter.Expression = 'test me $1';
    filter.Weight = .5;
    filter.LowerLimit = 10;
    this.GridFilters.push(filter);
    filter = new FilterModel();
    filter.ColumnName = 'Main';
    filter.Expression = 'test me $1';
    filter.Weight = .5;
    filter.LowerLimit = 10;
    this.GridFilters.push(filter);
  }

  gridFilterChanged(event) {
    DataService.gridFilterValue.next(this.GridFilterValue);
  }

  ngOnInit() {
    // this.cards = this.cardsService.getCards();
  }
}
