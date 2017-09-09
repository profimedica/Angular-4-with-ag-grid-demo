import { CardsFilterComponent } from './ajuro.filter/ajuro.cards.filter.component';
import { CardsListComponent } from './ajuro.list/ajuro.cards.list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@NgModule({
  imports:      [ BrowserModule, CardsListComponent, CardsFilterComponent ],
  /*providers:    [ Logger ],*/
  declarations: [ AppComponent, CardsListComponent, CardsFilterComponent ],
  exports:      [ AppComponent, CardsListComponent, CardsFilterComponent ],
  bootstrap:    [ AppComponent, CardsListComponent, CardsFilterComponent ]
})
export class CardsModule { }
