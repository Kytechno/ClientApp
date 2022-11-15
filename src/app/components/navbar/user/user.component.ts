import { Component, OnInit } from '@angular/core';
import {DateTime} from 'luxon';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(private auth: AuthService) {}

  ngOnInit(): void {

  }

  logout() {
      this.auth.logout();
  }

  formatDate(date: any) {
      return DateTime.fromISO(date).toFormat('dd LLL yyyy');
  }
}
