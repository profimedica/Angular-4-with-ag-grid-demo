import { DomSanitizer } from '@angular/platform-browser';
import { HtmlAstPath } from '@angular/compiler';

import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'diff_to_color',
  pure: false
})

// https://cssanimation.rocks/spheres/
export class DiffToColorPipeComponent implements PipeTransform {
  static colors = ['#00FF00', '#FF0000', '#2020FF', '#FF0000'];
  // static colors = ['#008800', '#888800', '#008888', '#880088'];
  constructor(private sanitized: DomSanitizer) {} // Preserve style when dynamicaly injected in HTML
  transform(value: Array<number>, args: any[] = null): any {
      let html_value = ``;
      value.forEach(element => {
        html_value += `<figure _ngcontent-c5 class='ajuro_circle' style='background: radial-gradient(circle at 5px 5px, `
        + DiffToColorPipeComponent.colors[ element % DiffToColorPipeComponent.colors.length ] +  `, #000);'></figure>`;
      });
      return this.sanitized.bypassSecurityTrustHtml(html_value); // Preserve style when dynamicaly injected in HTML
    }
}
