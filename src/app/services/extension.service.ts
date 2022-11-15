import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Extension } from '../models/extension.model';
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
};

@Injectable({
  providedIn: 'root'
})

export class ExtensionService {
  baseUrl = 'http://localhost:5000/api/Extension/';



  constructor(private http: HttpClient) { }


  getExtensionByNumber(ExtensionNumber: string):Observable<Extension>{

    return this.http.post<Extension>(this.baseUrl + "GetExtension?ExtensionNumber="+ExtensionNumber, httpOptions)
  }

}
