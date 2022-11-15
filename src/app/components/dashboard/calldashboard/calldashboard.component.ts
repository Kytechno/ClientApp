import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CallStatService } from 'src/app/services/callStat.service';
import { GesnotificationService } from 'src/app/services/gesnotification.service';

@Component({
  selector: 'app-calldashboard',
  templateUrl: './calldashboard.component.html',
  styleUrls: ['./calldashboard.component.scss']
})
export class CalldashboardComponent implements OnInit {
  stateConvsersationNotification!: Subscription;
  callnotification!: Subscription;
  numberOfoutGoingCall: any;
  numberOfInCommingCall: any;
  numberOfAnswersCall: any;
  numberOfNoAnswersCall: any;

  constructor(private callstatservice: CallStatService, private notification: GesnotificationService) { }

  ngOnInit(): void {
    this.onNotify();
    this.onGetStat();
  }

  onGetStat(){
    this.callstatservice.GetStatistique()
    .subscribe(resp => {
      this.numberOfoutGoingCall = resp.nombreAppelSortants;
      this.numberOfInCommingCall = resp.nombreAppelEntrants;
      this.numberOfAnswersCall = resp.nombreAppelTraites;
      this.numberOfNoAnswersCall = resp.nombreAppels - resp.nombreAppelTraites
    })
  }

  onNotify(){
    this.notification.callSubject.subscribe(call => {
      if(call.typeCall=="IncomingCall"){
        this.numberOfInCommingCall = this.numberOfInCommingCall + 1;
      }else{
        this.numberOfoutGoingCall = this.numberOfoutGoingCall + 1;
      }
      this.notification.stateConversationSubject.subscribe(() => {
        this.numberOfAnswersCall = this.numberOfAnswersCall + 1;
      })
    });
  }

}
