import { Component, Input, OnInit } from '@angular/core';
import { Observable, pipe, Subscription } from 'rxjs';
import { Call } from 'src/app/models/call.model';
import { GesnotificationService } from 'src/app/services/gesnotification.service';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/models/history.model'

@Component({
  selector: 'app-historycall',
  templateUrl: './historycall.component.html',
  styleUrls: ['./historycall.component.scss']
})
export class HistorycallComponent implements OnInit {
  @Input() events!: Observable<void>;
  callnotification!: Subscription;
  eventsSubscription!: Subscription;
  histories: History[] = [];

  constructor(private notification: GesnotificationService, private historyService: HistoryService) { }
   
  @Input() call!:Call;
  ngOnInit(): void {
    this.onNotify();
  }


  onNotify(){
    this.historyService.searchHistories(this.call.CustomerNumber).subscribe(history => {
      this.histories = history;
    })
  }

}
