import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Call } from '../models/call.model';
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
};

@Injectable({
  providedIn: 'root'
})

export class CallService {
  baseUrl = 'http://localhost:5000/api/Call/';



  constructor(private http: HttpClient) { }


  makeCall(call: Call):Observable<Call>{

    return this.http.post<Call>(this.baseUrl + "EmettreAppel", call)
  }

  answerCall(call: Call):Observable<Call>{
    return this.http.post<Call>(this.baseUrl + "RepondreAppel", call)
  }

  dropMeCall(loginName: string):Observable<Call>{
    return this.http.post<Call>(this.baseUrl + "Racrocher?loginName="+loginName, httpOptions)
  }

  onHoldCall(call: Call):Observable<Call>{
    return this.http.post<Call>(this.baseUrl + "MettreEntente", call)
  }

  onRetrieveCall(call: Call):Observable<Call>{
    return this.http.post<Call>(this.baseUrl + "RecupererEntente", call)
  }

}
