import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({ name: 'date' })
export class DateFormatPipe implements PipeTransform {
  transform(date: any, args?: any): any {
    let newDate = new Date(date)
    return moment(newDate).format('DD/MM/YYYY')

  }
}
