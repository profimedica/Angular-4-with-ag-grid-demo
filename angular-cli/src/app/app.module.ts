import { CardsListComponent } from './cards/list/cards.list.component';
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
import { PipesModule } from './pipes/pipes.module';

import {AgGridModule} from 'ag-grid-angular/main';
import {AppComponent} from './app.component';
import {MyGridApplicationComponent} from './my-grid-application/my-grid-application.component';
import {RedComponentComponent} from './red-component/red-component.component';

// Modules
import { CardsModule } from './cards/cards.module';
import { AjuroInterceptor } from './my.interceptor';

import {VERSION, Pipe, PipeTransform} from '@angular/core';
@Pipe({ name: 'keys',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value);
    }
}

@NgModule({
    declarations: [
        AppComponent,
        CardsListComponent,
        KeysPipe,
        MyGridApplicationComponent,
        RedComponentComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MdButtonModule, MdCheckboxModule, MdInputModule, MdNativeDateModule, MdSlideToggleModule,
        MdTooltipModule, MdSidenavModule, MdTableModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        PipesModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        )
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AjuroInterceptor,
      multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
  // https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
}
