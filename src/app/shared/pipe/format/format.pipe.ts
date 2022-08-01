import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: number) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  }

}
