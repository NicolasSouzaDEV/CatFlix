import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catDesc'
})
export class CatDescPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 100) {
      return value.substring(0, 100) + "..."
    } else {return value}
  }

}
