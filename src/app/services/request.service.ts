import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, Subject, Subscription} from 'rxjs';
import { Request } from '../models/request.model';
import { Call } from '../models/call.model';

@Injectable({
  providedIn: 'root'
})

export class RequestService implements OnInit{
  callnotification!: Subscription;
  call: Call = {
    CallRef: 'un',
    ExtensionNumber: '891',
    CustomerNumber: '800',
    dateHeure: '2022-07-10',
    typeCall: 'Appel',
    removeParticipant: '800'
  };
  request: Request={
    IdRequest: '0',
    Motif: '',
    status: ''
  };

  baseUrl = 'http://localhost:5000/api/Request/';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

  enregisterRequest(request : Request):Observable<Request>{
    return this.http.post<Request>(this.baseUrl + "CreerRequest", request)
  }



  /*onSubmitRequest(){
    console.log(this.call.CallRef)
      this.request.IdRequest = this.call.CallRef;
      console.log(this.request.IdRequest)
      this.request.status;
      console.log(this.request.status)
      this.request.Motif;
      this.enregisterRequest(this.request).subscribe(
        response => {
          console.log(response);
      });
  }*/
}
