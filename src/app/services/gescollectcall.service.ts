import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Call } from '../models/call.model';
import { Subject, Subscription } from 'rxjs';
import { Customer } from '../models/customer.model';
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
export class GescollectcallService {

  baseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {}

  getACall(CallRef : string): Observable<Call>{
    return this.http.post<Call>(this.baseUrl + "Call/ObtenirCall?CallRef="+CallRef, httpOptions);
  }
  getACallByNumber(CustomerNumber : string): Observable<Call>{
    return this.http.post<Call>(this.baseUrl + "Call/ObtenirCall?CustomerNumber="+CustomerNumber, httpOptions);
  }

  getACustomerByNumber(CustomerNumber : string): Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl + "Customer/SearchCustomer?CustomerNumber="+CustomerNumber, httpOptions);
  }

  getDataCustomById(IdDataCustom : number): Observable<DataCustom>{
    return this.http.post<DataCustom>(this.baseUrl + "DataCustom/SearchDataCustom?IdDataCustom="+IdDataCustom, httpOptions);
  }
}