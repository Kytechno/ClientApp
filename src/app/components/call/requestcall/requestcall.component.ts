import { Component, Input, OnInit } from '@angular/core';
import { from, Observable, Subscription, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, fromEvent, interval, map, merge } from 'rxjs';
import { Call } from 'src/app/models/call.model';
import { Request } from 'src/app/models/request.model';
import { GesnotificationService } from 'src/app/services/gesnotification.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-requestcall',
  templateUrl: './requestcall.component.html',
  styleUrls: ['./requestcall.component.scss']
})
export class RequestcallComponent implements OnInit {
  eventsSubscription!: Subscription;
  modification$ = new Subject<void>();
  @Input() events!: Observable<void>;
 request: Request={
   IdRequest: '0',
   Motif: '',
   status: ''
 };

  constructor(private requestService: RequestService, private notification: GesnotificationService) { }

  @Input() call!:Call;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.onSubmitRequest());

    const eventModification$ = this.modification$.pipe(
      debounceTime(7000),
      distinctUntilChanged(),
      
    );

    eventModification$.subscribe((event) => {
      this.onSubmitRequest();
    })
  }

  onSaveRequest(event: any){
    this.modification$.next(event)
  }

  onSubmitRequest(){
    this.request.IdRequest = this.call.CallRef;
    this.requestService.enregisterRequest(this.request).subscribe(
      response => {
        console.log(response);
    });
  }

}
