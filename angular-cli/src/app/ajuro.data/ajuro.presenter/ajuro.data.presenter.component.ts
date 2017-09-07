import { Observable } from 'rxjs/observable';
import { CardModel } from './../ajuro.data.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../ajuro.data.service';

@Component({
  selector: 'app-data-provider',
  template: `
   <div>
   </div>
 `,
    providers: [DataService]
})

export class DataPresenterComponent implements OnInit {

  constructor(public dataService: DataService) {
  }
  ngOnInit() {
    console.log(this.dataService); // you got the service
  }
}
