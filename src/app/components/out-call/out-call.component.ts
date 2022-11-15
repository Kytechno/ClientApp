import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/models/history.model'

@Component({
  selector: 'app-out-call',
  templateUrl: './out-call.component.html',
  styleUrls: ['./out-call.component.scss']
})
export class OutCallComponent implements OnInit {
  histories: History[] = [];
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.onGetOutCalls()
  }

  onGetOutCalls(){
    this.historyService.getOutgoingCalls().subscribe(history => {
      this.histories = history;
    })
  }
}
