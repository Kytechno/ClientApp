import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { CookieService } from 'ngx-cookie-service';
import { Subject, Subscription } from 'rxjs';
import { Call } from '../models/call.model';
import { GescollectcallService } from './gescollectcall.service';
@Injectable({
  providedIn: 'root'
})
export class GesnotificationService {

  constructor(private actionCall: GescollectcallService, private cookie: CookieService) { }
  private connection!: signalR.HubConnection;
  callSubject = new Subject<Call>();
  stateConversationSubject = new Subject<void>();
  stateEndSubject = new Subject<void>();
  callCardSubject = new Subject<void>();

  connect() {
    if (!this.connection) {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5000/signalr", {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();
        
      this.connection.on("ReceptionAppelEntrant", (CallRef, AgentNumber) => {
        console.log(AgentNumber);
        console.log(this.cookie.get('devicenumber'));
        this.callCardSubject.next();
        if (this.cookie.get('devicenumber') == AgentNumber){
          this.actionCall.getACall(CallRef).subscribe(call => {
           this.callSubject.next(call);
          });
        }
    });

    this.connection.on("AppelEntrantCoummunucation", (CallRef, AgentNumber) => {
      console.log(AgentNumber);
      console.log(this.cookie.get('devicenumber'));
      if (this.cookie.get('devicenumber') == AgentNumber){
        this.stateConversationSubject.next();
      }
    });

    this.connection.on("AppelSortantSonerie", (CallRef, AgentNumber) => {
      console.log(AgentNumber);
      console.log(this.cookie.get('devicenumber'));
      this.callCardSubject.next();
      if (this.cookie.get('devicenumber') == AgentNumber ){
        this.actionCall.getACall(CallRef).subscribe(call => {
         this.callSubject.next(call);
         console.log(call)
        });
      }
  });

  this.connection.on("AppelSortantCommunication", (CallRef, AgentNumber) => {
    console.log(AgentNumber);
    console.log(this.cookie.get('devicenumber'));
    if (this.cookie.get('devicenumber') == AgentNumber){
      this.stateConversationSubject.next();
    }
  });

    this.connection.on("FinDappel", (CallRef, AgentNumber) => {
      console.log(AgentNumber);
      console.log(this.cookie.get('devicenumber'));
      if (this.cookie.get('devicenumber') == AgentNumber){
        this.stateEndSubject.next();
      }
    });


      
      this.connection.start().then(function () {
        console.log("SignalR Hub Connected");
    }).catch(function (err) {
        return console.error(err.toString());
    });
    }
  }

}
