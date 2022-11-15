import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatCall } from '../models/statcall.model';

@Injectable({
  providedIn: 'root'
})

export class CallStatService {
  baseUrl = 'http://localhost:5000/api/Call/';



  constructor(private http: HttpClient) { }

  outGoingCall(){
    return this.http.get(this.baseUrl + "GetNumberOfOutgoingCalls")
  }

  InCommingCall(){
    return this.http.get(this.baseUrl + "GetNumberOfIncomingCalls")
  }

  GetStatistique():Observable<StatCall>{ 
    return this.http.get<StatCall>(this.baseUrl + "GetStatistique")
  }


}
