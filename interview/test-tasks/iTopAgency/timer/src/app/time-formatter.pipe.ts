import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeFormatter',
    standalone: false
})
export class TimeFormatterPipe implements PipeTransform {

  transform(value: number): string {
    return ("0" + value).slice(-2);
  }

}
