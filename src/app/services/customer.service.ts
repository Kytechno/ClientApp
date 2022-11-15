import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
};

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  baseUrl = 'http://localhost:5000/api/Customer/';



  constructor(private http: HttpClient) { }

  UpdateCustomer(customer : Customer):Observable<Customer>{
    return this.http.put<Customer>(this.baseUrl + "ModifierCustomer", customer)
  }

  searchCustomer(CustomerNumber : string):Observable<Customer>{

    return this.http.post<Customer>(this.baseUrl + "SearchCustomer?customerNumber="+CustomerNumber, httpOptions);
  }

}
