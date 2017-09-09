
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'properties',
  pure: false
})

export class PropertiesPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
      // console.log(JSON.stringify(Object.keys(value)));
      if (Object.getOwnPropertyNames(value).length > 0) {
        const r = 0;
      }
        return Object.keys(value);
    }
}
