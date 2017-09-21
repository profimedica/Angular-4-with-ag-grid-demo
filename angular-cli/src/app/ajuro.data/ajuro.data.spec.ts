import { AjuroInterceptor } from './../my.interceptor';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';
import {DataService} from './ajuro.data.service';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DataModule } from './ajuro.data.module';
import { DataPresenterComponent } from './ajuro.presenter/ajuro.data.presenter.component';
// Containing describe block (or "suite"), usually named for an app feature.
describe('DataService', function() {
  beforeEach(function() {
    this.dataService = new DataService(null);
  });

  it('UNIT TEST FOR FUNCTION: (method) DataService.setCards(cardType: number, data: any, source: number): void', function() {
    // Identifier exists
    expect(this.dataService.setCards).toBeDefined();
    // It is a function
    expect(this.dataService.setCards).toEqual(jasmine.any(Function));
  });

});
