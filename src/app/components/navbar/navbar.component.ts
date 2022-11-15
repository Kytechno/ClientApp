import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notifyService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
CustomerNumber = '';
  constructor(private notif: NotifyService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.notif.SearchEvent.emit(this.CustomerNumber);
    console.log(this.CustomerNumber);
  }

}
