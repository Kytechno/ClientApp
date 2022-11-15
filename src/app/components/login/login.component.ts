import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notifyService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(private auth: AuthService, private cookie: CookieService, private router: Router,
    private notif: NotifyService) {}
 user: User = {
   Id :'0',
   FirstName : 'jean',
   LastName : 'k',
   DeviceNumber: '',
   Username: '',
   UserEmail : '',
   Password : ''
 };
 ngOnInit(): void {
 }


 logIn() {
   this.auth.login(this.user).pipe(
     tap((response: any) => {
       this.cookie.set('token', response.Token);
       this.cookie.set('devicenumber', response.DeviceNumber);
     })
   ).subscribe(AuthenteResponse => {
       this.router.navigate(['/dashboard'])
     },
   )
 }

}
