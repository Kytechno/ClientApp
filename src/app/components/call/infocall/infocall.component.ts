import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Call } from 'src/app/models/call.model';
import { Customer } from 'src/app/models/customer.model';
import { DataCustom } from 'src/app/models/datacustom.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CallService } from 'src/app/services/call.service';
import { ExtensionService } from 'src/app/services/extension.service';
import { GescollectcallService } from 'src/app/services/gescollectcall.service';
import { GesnotificationService } from 'src/app/services/gesnotification.service';
import { NotifyService } from 'src/app/services/notifyService';

@Component({
  selector: 'app-infocall',
  templateUrl: './infocall.component.html',
  styleUrls: ['./infocall.component.scss']
})
export class InfocallComponent implements OnInit {
  statusnotification!: Subscription;
  stateConvsersationNotification!: Subscription;
  stateEndNotification!: Subscription;

  /*calls: Call = {
    CallRef: '0',
    ExtensionNumber: '800',
    CustomerNumber: '800',
    dateHeure: '2022-07-10',
    typeCall: 'Appel',
    removeParticipant: '800'
  };
  user: User = {
    Id :'0',
    FirstName : 'jean',
    LastName : 'k',
    DeviceNumber: '',
    Username: 'jeanluc',
    UserEmail : 'yao',
    Password : '0000'
  };*/

  state: any;
  showButtonAppeler = false;
  showButtonDecrocher = false;
  showButtonRacrocher = false;
  showButtonMiseGarde = false;
  showButtonFinGarde = false;

 

  constructor(private notification: GesnotificationService,private action: GescollectcallService, 
    private auth: AuthService, private callService: CallService, private extensionService: ExtensionService ) { }

  @Input() customer!: Customer;
  @Input() dataCustom!: DataCustom; 
  @Input() call!:Call;
  ngOnInit(): void {
    this.onNotify()
    this.state = "appel en sonnerie";
    this.stateConvsersationNotification = this.notification.stateConversationSubject.subscribe(() => this.onStateConvsersation());
    this.stateEndNotification = this.notification.stateEndSubject.subscribe(() => this.onStateEnd());
  }

  onStateConvsersation() {
    this.state = "En communication";
    this.showButtonRacrocher = true;
    this.showButtonMiseGarde = true;
    this.showButtonDecrocher = false;
    console.log(this.call)
  }
  onStateEnd() {
    this.state = "Fin d'appel";
    this.showButtonRacrocher = false;
    this.showButtonMiseGarde = false;
    this.showButtonDecrocher = false;
    this.showButtonAppeler = false;
    this.showButtonFinGarde = false;
  }

onNotify(){
      if(this.call.typeCall === "IncomingCall"){
        this.showButtonDecrocher = true;
      }else
      this.showButtonRacrocher =true;
  }


  onAnswer(){
    this.callService.answerCall(this.call)
    .subscribe(
      response => {
        console.log(response);
      }
    )
  }

  onDropCall(){
    this.extensionService.getExtensionByNumber(this.call.ExtensionNumber)
    .subscribe(extension =>{
      this.callService.dropMeCall(extension.loginName)
      .subscribe(
        response => {
          console.log(response)
      }
     )
    })
  };

  onHold(){
    this.callService.onHoldCall(this.call).subscribe(response => {
      this.showButtonMiseGarde = false;
      this.showButtonFinGarde = true;
      this.state = "appel en attente";
    })
  }

  onRetrieve(){
    this.callService.onRetrieveCall(this.call).subscribe(response => {
      this.showButtonMiseGarde = true;
      this.showButtonFinGarde = false;
      this.state = "En communication";
    })
  }


}
