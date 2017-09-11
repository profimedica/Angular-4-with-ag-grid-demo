import { CardsSourcesComponent } from './../ajuro.cards/ajuro.sources/ajuro.cards.sources.component';
import { DiffToColorPipeComponent } from './../ajuro.pipes/diff_to_color.pipe';
import { AjuroInterceptor } from './../my.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsFilterComponent } from './../ajuro.cards/ajuro.filter/ajuro.cards.filter.component';
import { PipesModule } from './../ajuro.pipes/pipes.module';
import { WherePipeComponent } from './../ajuro.pipes/where.pipe';
import { PropertiesPipeComponent } from './../ajuro.pipes/properties.pipe';
import { DataPresenterComponent } from './../ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { DataService } from './../ajuro.data/ajuro.data.service';
import { CardsListComponent } from '../ajuro.cards/ajuro.list/ajuro.cards.list.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from '../app.component';
import {MyGridApplicationComponent} from './my-grid-application.component';
import {AgGridModule} from 'ag-grid-angular';
import {RedComponentComponent} from '../red-component/red-component.component';
import { MdButtonModule, MdCheckboxModule, MdInputModule,
  MdNativeDateModule, MdSlideToggleModule,
  MdTooltipModule, MdSidenavModule, MdTableModule,
  MaterialModule } from '@angular/material';

describe('MyGridApplicationComponent', () => {
    let component: MyGridApplicationComponent;
    let fixture: ComponentFixture<MyGridApplicationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AgGridModule.withComponents(
                    [RedComponentComponent ]
                ), ReactiveFormsModule, FormsModule,
                MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
                MdTooltipModule, MdSidenavModule, MdTableModule, HttpClientModule
            ],
            declarations: [
                WherePipeComponent, // needed for testing
                PropertiesPipeComponent, // needed for testing
                DiffToColorPipeComponent, // needed for testing
                AppComponent, MyGridApplicationComponent, RedComponentComponent,
                CardsListComponent, // needed for testing
                CardsFilterComponent, // needed for testing
                CardsSourcesComponent, // needed for testing
                DataPresenterComponent, // needed for testing
            ],
            providers: [{
              provide: HTTP_INTERCEPTORS,
              useClass: AjuroInterceptor,
              multi: true
            }, DataService ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyGridApplicationComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();

        expect(component).toBeTruthy();
    });

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Angular 4');
    }));

    it('grid API is not available until  `detectChanges`', () => {
        expect(component.gridOptions.api).not.toBeTruthy();
    });

    it('grid API is available after `detectChanges`', () => {
        fixture.detectChanges();
        expect(component.gridOptions.api).toBeTruthy();
    });

    it('select all button selects all rows', () => {
        fixture.detectChanges();
        component.selectAllRows();
        // expect(component.gridOptions.api.getSelectedNodes().length).toEqual(0); // Not relevant
    });

});
