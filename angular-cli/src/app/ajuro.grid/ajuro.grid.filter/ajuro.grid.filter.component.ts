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
  public ColumnDefs: Array<Object>;
  public SelectedFilter: FilterModel;

  constructor(private dataService: DataService) {
    this.GridFilterValue = '';
    this.GridFilters = new Array<FilterModel>();
    this.ColumnDefs = new Array();

    DataService.allCards.subscribe((allCards) => {
      const columns = [];
      this.GridFilters = new Array<FilterModel>();
      if (typeof(allCards[0]) !== 'undefined') {
        if (allCards[0].length > 0) {
          Object.keys(allCards[0][0]).forEach(key => {
            if (key !== 'ajuro_meta') {
              columns.push({headerName: key, field: key});
              const cur_filter = this.getFilter(key);
              // if ( this.getFilter(key) == null ) {
                const filter = new FilterModel();
                filter.ColumnName = key;
                filter.Expression = ' 1 = 1 ';
                filter.Weight = 1;
                filter.UpperLimit = 1;
                filter.LowerLimit = 100;
                filter.Order = 'Desc';
                filter.Value = '';
                filter.MaxRecords = 100;
                this.GridFilters.push(filter);
              // }
              if ( key === this.SelectedFilter.ColumnName ) {
                filter.Expression = this.SelectedFilter.Expression;
                this.SelectedFilter = filter;
              }
            }
          });
        }
      }
      this.ColumnDefs = columns;
      this.GridFilters.forEach(filter => {
        var deprected = true;
        Object.keys(allCards[0][0]).forEach(key => {
          if (filter.ColumnName === key) {
            deprected = false;
          }
        });
        if (deprected) {
          // this.GridFilters.splice(this.GridFilters.indexOf(filter), 0);
        }
      });
      // DataService.gridFilters.next(this.GridFilters);
    });

    this.SelectedFilter = new FilterModel();
  }

  getFilter(key) {
    for (let i = 0; i < this.GridFilters.length; i++) {
      if (this.GridFilters[i].ColumnName === key) {
        return this.GridFilters[i];
      }
    };
    return null;
  }

  gridFilterChanged(event) {
    DataService.gridFilters.next(this.GridFilters);
  }

  filterChanged(filterId) {
    DataService.gridFilters.next(this.GridFilters);
  }

  editFilter(filterModel) {
    this.SelectedFilter = filterModel;
  }

  ngOnInit() {
    // this.cards = this.cardsService.getCards();
  }
}
