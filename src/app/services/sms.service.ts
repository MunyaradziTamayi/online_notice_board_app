import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private baseUrl = 'http://localhost:8081/church/api/v1/alerts/'
  constructor(
    private http: HttpClient
  
  ){}

  sendSms(phoneNumber:string , message:string): Observable<string>{

    const data : FormData = new FormData();
    data.append('phoneNumber',phoneNumber)
    data.append('message',message)
    return this.http.post(`${this.baseUrl+'send-sms'}`,data,{responseType:'text'});

  }
  
 
}

