import { CardsListComponent } from './list/cards.list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@NgModule({
  imports:      [ BrowserModule, CardsListComponent ],
  /*providers:    [ Logger ],*/
  declarations: [ AppComponent, CardsListComponent ],
  exports:      [ AppComponent, CardsListComponent ],
  bootstrap:    [ AppComponent, CardsListComponent ]
})
export class CardsModule { }
