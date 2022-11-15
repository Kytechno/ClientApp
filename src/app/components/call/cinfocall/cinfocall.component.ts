import { Component, Input, OnInit } from '@angular/core';
import { from, Observable, Subscription, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, fromEvent, interval, map, merge } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { DataCustom } from 'src/app/models/datacustom.model';
import { CustomerService } from 'src/app/services/customer.service';
import { GescollectcallService } from 'src/app/services/gescollectcall.service';

@Component({
  selector: 'app-cinfocall',
  templateUrl: './cinfocall.component.html',
  styleUrls: ['./cinfocall.component.scss']
})
export class CinfocallComponent implements OnInit {
  @Input() CustomerNumber!: string;
  @Input() events!: Observable<void>;
  Infomodification$ = new Subject<void>();
  eventsSubscription!: Subscription;
  customer: Customer = {
    IdCustomer: 1,
    CustomerNumber: '',
    FirstName: 'marc',
    LastName: 'yao',
  };
  dataCustom: DataCustom = {
    IdDataCustom: 1,
    NumeroCompte: '',
    TypeVoiture: '',
    DateVisiteTec: ''
  };
  constructor(private actionCall: GescollectcallService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.onUpdateInfo();
    this.eventsSubscription = this.events.subscribe(() => this.onInfoSave()); 

    const eventModification$ = this.Infomodification$.pipe(
      debounceTime(7000),
      distinctUntilChanged(),
      
    );

    eventModification$.subscribe(() => {
      this.onInfoSave();
    })

  }

  onSaveCustomer(event: any){
    this.Infomodification$.next(event)
  }

  onUpdateInfo(){
    this.actionCall.getACustomerByNumber(this.CustomerNumber).subscribe(customer => {
      this.customer = customer;
      console.log(customer)
      this.actionCall.getDataCustomById(customer.IdCustomer).subscribe(dataCustom =>{
        this.dataCustom = dataCustom;
      })
     })
  }



  onInfoSave(){
    this.customerService.UpdateCustomer(this.customer)
    .subscribe(
      response => {
        console.log(response);
      }
    )
  };


}
