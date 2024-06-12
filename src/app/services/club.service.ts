import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { church } from '../models/church.model';
import { Observable } from 'rxjs';
import { club } from '../models/club.model ';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl = 'http://localhost:8081/clubs/api/v1'

  constructor(
    private http: HttpClient
  ) { }

  saveNotice(club: club) : Observable<string> {
    return this.http.post(`${this.baseUrl}/save-notice`, club, {responseType:'text'});
  }

  updateNotice(club: club) : Observable<string> {
    return this.http.post(`${this.baseUrl}/update-notice`, club, {responseType:'text'});
  }

  deleteClubById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-notice-by-id/${id}`);
  }

  getclubNoticeById(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/get-notice-by-id/${id}`);
  }

  getAllclubs(): Observable<any>{
    return this.http.get(`${this.baseUrl}/get-all-notices`);
  }

  getclubsNoticeWithinInterval(from_date: any, to_date: any) : Observable<any>{
    let data = new FormData();
    data.append('from_date', from_date+' 00:00:00');
    data.append('to_date', from_date+' 23:59:59'); //2024-01-07
    return this.http.post(`${this.baseUrl}/get-notices-within-interval`, data);
  }
}
