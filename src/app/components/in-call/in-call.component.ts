import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/models/history.model'

@Component({
  selector: 'app-in-call',
  templateUrl: './in-call.component.html',
  styleUrls: ['./in-call.component.scss']
})
export class InCallComponent implements OnInit {
  histories: History[] = [];
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.onGetInCalls()
  }

  onGetInCalls(){
    this.historyService.getIncommingCalls().subscribe(history => {
      this.histories = history;
    })
  }

}
