import { JsonPipeComponent } from './json.pipe';
import { DiffToColorPipeComponent } from './diff_to_color.pipe';
// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { WherePipeComponent } from './where.pipe';
import { PropertiesPipeComponent } from './properties.pipe';
import { YearPipeComponent } from './year-pipe.component';
import { DatePipeComponent } from './date-pipe.component';
import { TitleCasePipeComponent } from './titlecase-pipe.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe.component';
import { CurrencyPipeComponent } from './currency-pipe.component';

@NgModule({
  declarations: [
    YearPipeComponent,
    DatePipeComponent,
    TitleCasePipeComponent,
    AsyncObservablePipeComponent,
    CurrencyPipeComponent,
    JsonPipeComponent,
    WherePipeComponent,
    PropertiesPipeComponent,
    DiffToColorPipeComponent
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
    WherePipeComponent,
    PropertiesPipeComponent,
    PropertiesPipeComponent,
    DiffToColorPipeComponent
  ]
})
export class PipesModule {
}
