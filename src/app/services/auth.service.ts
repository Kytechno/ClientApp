import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.model'
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthenteResponse {
Id: string,
Username: string,
FirstName: string,
DeviceNumber: string,
LastName: string,
UserEmail: string,
Token: string
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: User = {
    Id :'0',
    FirstName : 'jean',
    LastName : 'k',
    DeviceNumber: '',
    Username: 'test',
    UserEmail : 'test@gamil.com',
    Password : '00'
  };
  _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {this._isLoggedIn$.next(this.token);}
  baseUrl = ' http://localhost:5000/api/User/Authenticate/authenticate';

  login(user: User):Observable<AuthenteResponse>{
    return this.http.post<AuthenteResponse>(this.baseUrl, user);
  }

  get token(): any {
    return this.cookie.get('token');
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
}

}

 