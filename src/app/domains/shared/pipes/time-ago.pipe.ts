import { Pipe, PipeTransform } from '@angular/core';
import { FormatDistanceFn, formatDistance } from 'date-fns';
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    //Solución por estudiante!
    /* const date_update = new Date(value);
    const date_today = new Date();
  
    const diff = Math.abs(date_today.getTime() - date_update.getTime() );
    const days = Math.trunc(diff / (1000 * 60 * 60 * 24));

    const time_ago = days > 0 ? `Añadido hace ${days} dias atras!` : 'Añadido recientemente!';

    return time_ago; */
    
    //Solucion por el instructor
    const date = new Date(value);
    const today_date = new Date();
    return formatDistance(today_date,date);

  }

}
