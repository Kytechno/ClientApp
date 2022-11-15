import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, HostBinding, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject, Subscription } from 'rxjs';
import { Call } from 'src/app/models/call.model';
import { Customer } from 'src/app/models/customer.model';
import { DataCustom } from 'src/app/models/datacustom.model';
import { Tab } from 'src/app/models/tab.model';
import { CallService } from 'src/app/services/call.service';
import { CustomerService } from 'src/app/services/customer.service';
import { DataCustomService } from 'src/app/services/dataCustom.service';
import { GescollectcallService } from 'src/app/services/gescollectcall.service';
import { GesnotificationService } from 'src/app/services/gesnotification.service';
import { NotifyService } from 'src/app/services/notifyService';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  callCardnotification!: Subscription;
  callnotification!: Subscription;
  showInfoCustomer= false;
  showCallCard = false;
  showSearchBar = true;
  showDashboard = true;
  showFiche = false;
  call: Call = {
    CallRef: '0',
    ExtensionNumber: '',
    CustomerNumber: '',
    dateHeure: '2022-07-02',
    typeCall: '',
    removeParticipant: ''
  };


  tabs: Tab[] = [];
  counter = this.tabs.length; //compteur
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


  customers: Customer[] = [];
  dataCustoms: DataCustom[] =[];
  CustomerNumber: string = ''

  constructor(private customerService: CustomerService, private notification: GesnotificationService, private actionCall: GescollectcallService,
              private dataCustomService: DataCustomService, private callService: CallService, private cookie: CookieService,
              private notifySearch: NotifyService) {}

  ngOnInit(): void {
    this.notifySearch.SearchEvent.subscribe((CustomerNumber: string) => {
      this.showInfoCustomer= true;
      this.showDashboard = false;
      console.log(CustomerNumber);
      this.customerService.searchCustomer(CustomerNumber)
      .subscribe(customer =>{
        console.log(customer);
        if(customer){
          console.log(customer);
          this.customer = customer;
          console.log(this.customer);
          this.dataCustomService.getDataCustomById(customer.IdCustomer)
          .subscribe(datacustom =>{
            this.dataCustom = datacustom;
        })
        }
      })
    })
    this.onNotify();
    this.callCardnotification = this.notification.callCardSubject.subscribe(() => this.onPrintCallCard());
    this.notifySearch.calleventsSubject.subscribe(() => {
      //this.onSearch()
    });
    
  }
  onNotify(){
    this.callnotification = this.notification.callSubject.subscribe(call => {
      this.actionCall.getACustomerByNumber(call.CustomerNumber).subscribe(customer => {
        this.customer = customer;
        this.actionCall.getDataCustomById(customer.IdCustomer).subscribe(dataCustom =>{
          this.dataCustom = dataCustom;
        })
       })
       this.add(call);
    });
  }

  add(call: Call) { 
    let tab : Tab = 
      {
        id: 'om',
        number: '900',
        state: '',
        viewstate: '',
        call: call
      }
    tab.id = "a" + call.CallRef;
    tab.number = call.CustomerNumber;
    tab.call= call;
    this.tabs.push(tab);
    console.log(this.counter)
    if (this.counter == 0){
      tab.state = "active";
      tab.viewstate = "active";
    }
    this.counter ++;
  }

  onPrintCallCard(): void {
    this.showCallCard = true;
    this.showSearchBar = false;
    this.showFiche = true;
    this.showDashboard = false;
  }

  onSave(){
    this.eventsSubject.next();
    this.showSearchBar = true;
    this.showCallCard = false;
    this.showDashboard = true;
  };

  removeTab(index: number) {
    this.onSave();
    this.tabs.splice(index, 1);
    //this.counter -1;
  }

  /*close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }*/

  /*onSearch(){
    this.notifySearch.SearchEvent.subscribe((CustomerNumber: string) =>{
      this.showInfoCustomer= true;
      this.customerService.searchCustomer(CustomerNumber)
      .subscribe(customer =>{
        if(customer){
          this.customer = customer;
          this.dataCustomService.getDataCustomById(customer.IdCustomer)
          .subscribe(datacustom =>{
            this.dataCustom = datacustom;
        })
        }
      })
      })
  };*/


 

  onCall(event: any){
    let c : Call = 
    {
      CallRef: '0',
      ExtensionNumber: '',
      CustomerNumber: '',
      dateHeure: '2022-07-02',
      typeCall: '',
      removeParticipant: ''
    };
    this.showInfoCustomer= false;
    this.showCallCard = true;
    this.showFiche = true; 
    this.showSearchBar = true;
    console.log(this.customer.CustomerNumber)
    c.CustomerNumber = this.customer.CustomerNumber;
    console.log(this.call.CustomerNumber)
    c.ExtensionNumber= this.cookie.get('devicenumber');
    console.log(c)
    this.eventsSubject.next();
    this.callService.makeCall(c)
      .subscribe(res=>{
        console.log(res)
        c = res;
      });
  };


}



