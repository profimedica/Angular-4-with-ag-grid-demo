import { CardsSourcesComponent } from './ajuro.cards/ajuro.cards.sources/ajuro.cards.sources';
import { CardsFilterComponent } from './ajuro.cards/ajuro.cards.filter/ajuro.cards.filter';
import { DataService } from './ajuro.data/ajuro.data.service';
import { CardsListComponent } from './ajuro.cards/ajuro.cards.list/ajuro.cards.list';
import { CardsPreviewComponent } from './ajuro.cards/ajuro.cards.preview/ajuro.cards.preview';
import { DataPresenterComponent } from './ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { GridFilterComponent } from './ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PipesModule } from './ajuro.pipes/pipes.module';

// import "ag-grid-enterprise"; // ****
// import {AgGridModule} from 'ag-grid-angular/main';
import {AgGridModule} from 'ajuro-ui-angular/main';
import {AppComponent} from './app.component';
import {GridAreaComponent} from './ajuro.grid/ajuro.grid.area/ajuro.grid.area.component';
import {MyGridApplicationComponent} from './my-app/my-app.component';
import {RedComponentComponent} from './red-component/red-component.component';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
    MdNativeDateModule, MdSlideToggleModule,
    MdTooltipModule, MdSidenavModule, MdTableModule,
    MATERIAL_SANITY_CHECKS } from '@angular/material';

// Modules
// import { AjuroCardsModule } from './ajuro.cards/ajuro.cards.module';
import { AjuroInterceptor } from './my.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        DataPresenterComponent,
        CardsSourcesComponent,
        CardsListComponent,
        CardsFilterComponent,
        CardsPreviewComponent,
        GridFilterComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        GridAreaComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MdButtonModule, 
        MdCheckboxModule, 
        MdInputModule, 
        MdNativeDateModule, 
        MdCardModule, 
        MdMenuModule, 
        MdToolbarModule, 
        MdIconModule,
        MdSlideToggleModule,
        MdTooltipModule, 
        MdSidenavModule, 
        MdTableModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        PipesModule,
        // AjuroCardsModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        )
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AjuroInterceptor,
            multi: true
        }, 
        DataService,
        {
            provide: MATERIAL_SANITY_CHECKS,
            useValue: false
            } 
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  // https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
}
