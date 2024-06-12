import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notice } from '../models/notice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private baseUrl = 'http://localhost:8081/notice/api/v1'

  constructor(
    private http: HttpClient
  ) { }

  saveNotice(notice: Notice) : Observable<string> {
    return this.http.post(`${this.baseUrl}/save-notice`, notice, {responseType:'text'});
  }

  updateNotice(notice: Notice) : Observable<string> {
    return this.http.post(`${this.baseUrl}/update-notice`, notice, {responseType:'text'});
  }

  deleteNoticeById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-notice-by-id/${id}`);
  }

  getNoticeById(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/get-notice-by-id/${id}`);
  }

  getAllNotices(): Observable<any>{
    return this.http.get(`${this.baseUrl}/get-all-notices`);
  }

  getNoticeWithinInterval(from_date: any, to_date: any) : Observable<any>{
    let data = new FormData();
    data.append('from_date', from_date+' 00:00:00');
    data.append('to_date', from_date+' 23:59:59'); //2024-01-07
    return this.http.post(`${this.baseUrl}/get-notices-within-interval`, data);
  }
}
