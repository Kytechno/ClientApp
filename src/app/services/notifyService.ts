import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Customer } from '../models/customer.model';
import { GescollectcallService } from './gescollectcall.service';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private actionCall: GescollectcallService) { }
  CustomerNumberSubject = new Subject<string>();
  calleventsSubject: Subject<void> = new Subject<void>();
  SearchEvent:EventEmitter<string> = new EventEmitter<string>();
}
