import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): number {

    var date = new Date(value);
    return date.getFullYear();

  }

}
