import { DataPresenterComponent } from './ajuro.presenter/ajuro.data.presenter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@NgModule({
  imports:      [ BrowserModule, DataPresenterComponent ],
  /*providers:    [ Logger ],*/
  declarations: [ AppComponent, DataPresenterComponent ],
  exports:      [ AppComponent, DataPresenterComponent ],
  bootstrap:    [ AppComponent, DataPresenterComponent ]
})
export class DataModule { }
