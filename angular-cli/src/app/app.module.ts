import { CardsSourcesComponent } from './ajuro.cards/ajuro.sources/ajuro.cards.sources.component';
import { CardsFilterComponent } from './ajuro.cards/ajuro.filter/ajuro.cards.filter.component';
import { DataService } from './ajuro.data/ajuro.data.service';
import { CardsListComponent } from './ajuro.cards/ajuro.list/ajuro.cards.list.component';
import { DataPresenterComponent } from './ajuro.data/ajuro.presenter/ajuro.data.presenter.component';
import { GridFilterComponent } from './ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule,
    MdNativeDateModule, MdSlideToggleModule,
    MdTooltipModule, MdSidenavModule, MdTableModule,
    MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PipesModule } from './ajuro.pipes/pipes.module';

// import "ag-grid-enterprise"; // ****
import {AgGridModule} from 'ag-grid-angular/main';
import {AppComponent} from './app.component';
import {GridAreaComponent} from './ajuro.grid/ajuro.grid.area/ajuro.grid.area.component';
import {MyGridApplicationComponent} from './my-app/my-app.component';
import {RedComponentComponent} from './red-component/red-component.component';

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
        GridFilterComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        GridAreaComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
        MdTooltipModule, MdSidenavModule, MdTableModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        PipesModule,
        // AjuroCardsModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        )
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AjuroInterceptor,
      multi: true
    }, DataService ],
    bootstrap: [AppComponent]
})
export class AppModule {
  // https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
}
