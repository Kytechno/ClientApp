import { Call } from '../models/call.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Infos } from '../models/infos.model';
import { GescollectcallService } from './gescollectcall.service';
import { GesnotificationService } from './gesnotification.service';

@Injectable({
  providedIn: 'root'
})
export class GescontextService {

  notificationSubscription!: Subscription;

  
  constructor(private notification: GesnotificationService, private actionCall: GescollectcallService) { }
  
}
