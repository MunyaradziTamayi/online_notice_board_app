import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor() { }

  getDateNow() {
    var now = new Date();
    let month: any = now.getMonth() + 1;
    month.toString().length < 2? month = '0'+ month : month;

    let day: any = now.getDate();
    day.toString().length < 2? day = '0'+ day : day;

    
    var date_str = [
      now.getFullYear(),
      '-',
      month
      ,
      '-',
      day,
      ' ',
      now.getHours(),
      ':',
      now.getMinutes(),
      ':',
      now.getSeconds()
    ].join('');

    return date_str;

  }
}
