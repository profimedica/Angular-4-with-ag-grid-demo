// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { WherePipe } from './where.pipe';
import { YearPipeComponent } from './year-pipe.component';
import { DatePipeComponent } from './date-pipe.component';
import { TitleCasePipeComponent } from './titlecase-pipe.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe.component';
import { CurrencyPipeComponent } from './currency-pipe.component';
import { JsonPipeComponent } from './json-pipe.component';
import { PropertiesPipe } from './properties.pipe';

@NgModule({
  declarations: [
    YearPipeComponent,
    DatePipeComponent,
    TitleCasePipeComponent,
    AsyncObservablePipeComponent,
    CurrencyPipeComponent,
    JsonPipeComponent,
    WherePipe,
    PropertiesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YearPipeComponent,
    DatePipeComponent,
    TitleCasePipeComponent,
    AsyncObservablePipeComponent,
    CurrencyPipeComponent,
    JsonPipeComponent,
    WherePipe,
    PropertiesPipe
  ]
})
export class PipesModule {
}
