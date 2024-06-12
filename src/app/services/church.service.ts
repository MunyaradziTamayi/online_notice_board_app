import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { church } from '../models/church.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChurchService {
  private baseUrl = 'http://localhost:8081/church/api/v1'

  constructor(
    private http: HttpClient
  ) { }

  saveNotice(church: church) : Observable<string> {
    return this.http.post(`${this.baseUrl}/save-notice`, church, {responseType:'text'});
  }

  updateNotice(church: church) : Observable<string> {
    return this.http.post(`${this.baseUrl}/update-notice`, church, {responseType:'text'});
  }

  deleteNoticeById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-notice-by-id/${id}`);
  }

  getchurchNoticeById(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/get-notice-by-id/${id}`);
  }

  getAllchurches(): Observable<any>{
    return this.http.get(`${this.baseUrl}/get-all-notices`);
  }

  getchurchNoticeWithinInterval(from_date: any, to_date: any) : Observable<any>{
    let data = new FormData();
    data.append('from_date', from_date+' 00:00:00');
    data.append('to_date', from_date+' 23:59:59'); //2024-01-07
    return this.http.post(`${this.baseUrl}/get-notices-within-interval`, data);
  }
}
