import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCustom } from '../models/datacustom.model';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class DataCustomService {

  baseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {}

  getDataCustomById(IdDataCustom : number): Observable<DataCustom>{
    return this.http.post<DataCustom>(this.baseUrl + "DataCustom/SearchDataCustom?IdDataCustom="+IdDataCustom, httpOptions);
  }
}