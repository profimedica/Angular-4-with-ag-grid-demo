import { DataService } from './../../ajuro.data/ajuro.data.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
 selector: 'app-grid-filter',
 styleUrls: ['../ajuro.grid.style.css'],
 templateUrl: './ajuro.grid.filter.html',
 providers: [DataService]
})

export class GridFilterComponent implements OnInit {
  GridFilterValue: string;

  constructor(private dataService: DataService) { }

  gridFilterChanged(event) {
    DataService.gridFilterValue.next(this.GridFilterValue);
  }

  ngOnInit() {
    // this.cards = this.cardsService.getCards();
  }
}


// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
