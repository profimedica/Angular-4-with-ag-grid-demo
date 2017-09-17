import { GridFilterComponent } from './ajuro.grid.filter/ajuro.grid.filter.component';
import { GridAreaComponent } from './ajuro.grid.area/ajuro.grid.area.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from '../app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GridFilterComponent, GridAreaComponent ],
  /*providers:    [ Logger ],*/
  declarations: [ AppComponent, GridFilterComponent, GridAreaComponent ],
  exports:      [ AppComponent, GridFilterComponent, GridAreaComponent ],
  bootstrap:    [ AppComponent, GridFilterComponent, GridAreaComponent ]
})
export class AjuroGridModule {

}
