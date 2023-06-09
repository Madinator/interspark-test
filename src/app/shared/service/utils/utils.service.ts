import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IDatepickerDate } from 'app/shared/model/date';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  dateFormatterFromDatepicker(control: AbstractControl | null): string | null {
    if (control && control.value && typeof control.value === 'object' && control.value.hasOwnProperty('year') && control.value.hasOwnProperty('month') && control.value.hasOwnProperty('day')) {
      const date = control.value;
      const formattedDate = `${date.day}-${date.month}-${date.year}`;
      if (/^\d{1,2}-\d{1,2}-\d{4}$/.test(formattedDate)) {
        return formattedDate;
      }
    }
    return null;
  }
  dateFormatterToDatepicker(dateString: string | null): IDatepickerDate | null {
    if (dateString && typeof dateString === 'string' && /^\d{1,2}-\d{1,2}-\d{4}$/.test(dateString)) {
      const parts = dateString.split('-');
      return {
        year: Number(parts[2]),
        month: Number(parts[1]),
        day: Number(parts[0])
      };
    }
    return null;
  }
}
