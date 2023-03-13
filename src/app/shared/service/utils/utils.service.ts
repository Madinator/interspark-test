import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  dateFormatter(control: AbstractControl | null): string | null {
    if (control && control.value && typeof control.value === 'object' && control.value.hasOwnProperty('year') && control.value.hasOwnProperty('month') && control.value.hasOwnProperty('day')) {
      const date = control.value;
      const formattedDate = `${date.day}-${date.month}-${date.year}`;
      if (/^\d{1,2}-\d{1,2}-\d{4}$/.test(formattedDate)) {
        return formattedDate;
      }
    }
    return null;
  }
}
