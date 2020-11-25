import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringToNumberArray'
})
export class StringToNumberArrayPipe implements PipeTransform {

  transform(value: string): number[] {
    return value.split('').map(parseFloat);
  }

}
