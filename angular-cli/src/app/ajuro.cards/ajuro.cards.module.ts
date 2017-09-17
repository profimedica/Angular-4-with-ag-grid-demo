import { CardsSourcesComponent } from './ajuro.cards.sources/ajuro.cards.sources';
import { CardsFilterComponent } from './ajuro.cards.filter/ajuro.cards.filter';
import { CardsPreviewComponent } from './ajuro.cards.preview/ajuro.cards.preview';
import { CardsListComponent } from './ajuro.cards.list/ajuro.cards.list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@NgModule({
  imports:      [ BrowserModule, CardsSourcesComponent, CardsFilterComponent, CardsListComponent, CardsPreviewComponent ],
  /*providers:    [ Logger ],*/
  declarations: [ AppComponent, CardsSourcesComponent, CardsFilterComponent, CardsListComponent, CardsPreviewComponent ],
  exports:      [ AppComponent, CardsSourcesComponent, CardsFilterComponent, CardsListComponent, CardsPreviewComponent ],
  bootstrap:    [ AppComponent, CardsSourcesComponent, CardsFilterComponent, CardsListComponent, CardsPreviewComponent ]
})
export class AjuroCardsModule { }
