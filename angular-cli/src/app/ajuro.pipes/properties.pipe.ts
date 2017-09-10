
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'properties',
  pure: false
})

export class PropertiesPipeComponent implements PipeTransform {
    transform(value: any, args: any[] = null): any {
      if (Object.getOwnPropertyNames(value).length > 0) {
        const x  = 0;
      }
        return Object.keys(value);
    }
}
