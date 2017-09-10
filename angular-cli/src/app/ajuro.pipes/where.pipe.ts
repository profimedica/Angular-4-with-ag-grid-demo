import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'where',
  pure: false
})

export class WherePipeComponent implements PipeTransform {
  transform(values: any, args: any[] = null): any {
    // console.log('Pipe: ' + JSON.stringify(values));
    const results = new Array<any>();
    const properties = Object.keys(args);

    if (Object.prototype.toString.call(values) === '[object Array]') {
      if (values.length > 0) {
        // console.log(JSON.stringify(values));
      }
      properties.forEach(argument => {
        (<Array<any>>values).forEach(value => {
          if (typeof(value) === 'object') {
            if (value.hasOwnProperty(argument)) {
              if (args[argument] === '' || value[argument].indexOf(args[argument]) > 0) {
                results.push(value);
              }
            }
          }
        });
      });
    }
    return results;
  }
}
