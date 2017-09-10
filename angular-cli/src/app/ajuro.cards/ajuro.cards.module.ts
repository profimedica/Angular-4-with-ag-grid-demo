import { CardsSourcesComponent } from './ajuro.sources/ajuro.cards.sources.component';
import { CardsFilterComponent } from './ajuro.filter/ajuro.cards.filter.component';
import { CardsListComponent } from './ajuro.list/ajuro.cards.list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@NgModule({
  imports:      [ BrowserModule, CardsSourcesComponent, CardsFilterComponent, CardsListComponent ],
  /*providers:    [ Logger ],*/
  declarations: [ AppComponent, CardsSourcesComponent, CardsFilterComponent, CardsListComponent ],
  exports:      [ AppComponent, CardsSourcesComponent, CardsFilterComponent, CardsListComponent ],
  bootstrap:    [ AppComponent, CardsSourcesComponent, CardsFilterComponent, CardsListComponent ]
})
export class AjuroCardsModule { }
