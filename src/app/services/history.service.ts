import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from '../models/history.model';
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

export class HistoryService {
  baseUrl = 'http://localhost:5000/api/History/';



  constructor(private http: HttpClient) { }

  searchHistories(customerNumber: string):Observable<History[]>{

    return this.http.post<History[]>(this.baseUrl + "searchHistories?customerNumber="+customerNumber, httpOptions);
  }

  getIncommingCalls():Observable<History[]>{

    return this.http.get<History[]>(this.baseUrl + "GetIncommingCalls");
  }

  getOutgoingCalls():Observable<History[]>{

    return this.http.get<History[]>(this.baseUrl + "GetOutgoingCalls");
  }

}
