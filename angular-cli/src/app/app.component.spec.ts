import { CardsSourcesComponent } from './ajuro.cards/ajuro.sources/ajuro.cards.sources.component';
import { DataService } from './ajuro.data/ajuro.data.service';
import { AjuroInterceptor } from './my.interceptor';
import { PropertiesPipeComponent } from './ajuro.pipes/properties.pipe';
import { WherePipeComponent } from './ajuro.pipes/where.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataPresenterComponent } from './ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { CardsFilterComponent } from './ajuro.cards/ajuro.filter/ajuro.cards.filter.component';
import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {RedComponentComponent} from './red-component/red-component.component';
import {AgGridModule} from 'ag-grid-angular';
import {MyGridApplicationComponent} from './my-grid-application/my-grid-application.component';
import { CardsListComponent } from './ajuro.cards/ajuro.list/ajuro.cards.list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdCheckboxModule, MdInputModule,
  MdNativeDateModule, MdSlideToggleModule,
  MdTooltipModule, MdSidenavModule, MdTableModule,
  MaterialModule } from '@angular/material';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AgGridModule.withComponents(
                    [RedComponentComponent]
                ), ReactiveFormsModule, FormsModule,
                MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
                MdTooltipModule, MdSidenavModule, MdTableModule, HttpClientModule
            ],
            // Missing components will be reported as errors, also added modules.
            declarations: [
                AppComponent,
                PropertiesPipeComponent,
                WherePipeComponent,
                MyGridApplicationComponent, RedComponentComponent,
                CardsSourcesComponent, // needed for testing
                CardsListComponent, // needed for testing
                CardsFilterComponent, // needed for testing
                DataPresenterComponent, // needed for testing
            ],
            providers: [{
              provide: HTTP_INTERCEPTORS,
              useClass: AjuroInterceptor,
              multi: true
            }, DataService ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
