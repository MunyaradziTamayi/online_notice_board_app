import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { admin } from '../models/admin.model ';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8081/admin/api/v1'

  constructor(
    private http: HttpClient
  ) { }

  saveNotice(admin : admin) : Observable<string> {
    return this.http.post(`${this.baseUrl}/save-notice`, admin, {responseType:'text'});
  }

  updateNotice(admin: admin) : Observable<string> {
    return this.http.post(`${this.baseUrl}/update-notice`, admin, {responseType:'text'});
  }

  deleteadminById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-notice-by-id/${id}`);
  }

  getadminById(id: number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/get-notice-by-id/${id}`);
  }

  getAlladmin(): Observable<any>{
    return this.http.get(`${this.baseUrl}/get-all-notices`);
  }

  getadminWithinInterval(from_date: any, to_date: any) : Observable<any>{
    let data = new FormData();
    data.append('from_date', from_date+' 00:00:00');
    data.append('to_date', from_date+' 23:59:59'); //2024-01-07
    return this.http.post(`${this.baseUrl}/get-notices-within-interval`, data);
  }

}
