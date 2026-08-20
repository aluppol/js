import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres',
  standalone: false,
})
export class GenresPipe implements PipeTransform {

  transform(value:string): string {
    return value.split('|').join(', ');
  }

}
