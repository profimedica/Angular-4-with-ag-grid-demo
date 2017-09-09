import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'where'
})

export class WherePipe implements PipeTransform {
  transform(values: any, args: any[] = null): any {
    // console.log(JSON.stringify(values));
    const results = new Array<any>();
    const properties = Object.keys(args);

    if (Object.prototype.toString.call(values) === '[object Array]') {
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
