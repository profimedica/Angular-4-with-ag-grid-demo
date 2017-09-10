
import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'properties',
  pure: false
})

export class JsonPipeComponent implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return JSON.stringify(value);
    }
}
