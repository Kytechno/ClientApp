import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainlayourtComponent } from './components/mainlayourt/mainlayourt.component';
import { LoginComponent } from './components/login/login.component';
import { CallComponent } from './components/call/call.component';
import { InfocallComponent } from './components/call/infocall/infocall.component';
import { HistorycallComponent } from './components/call/historycall/historycall.component';
import { RequestcallComponent } from './components/call/requestcall/requestcall.component';
import { MainlayourtModule } from './components/mainlayourt/mainlayourt.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CallModule } from './components/call/call.module';
import { CinfocallComponent } from './components/call/cinfocall/cinfocall.component';
import { InCallComponent } from './components/in-call/in-call.component';
import { OutCallComponent } from './components/out-call/out-call.component';
import { UserComponent } from './components/navbar/user/user.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {DropdownMenuComponent} from './components/dropdown/dropdown-menu/dropdown-menu.component';
import { CalldashboardComponent } from './components/dashboard/calldashboard/calldashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainlayourtComponent,
    LoginComponent,
    CallComponent,
    InfocallComponent,
    CinfocallComponent,
    HistorycallComponent,
    RequestcallComponent,
    InCallComponent,
    OutCallComponent,
    UserComponent,
    DropdownComponent,
    DropdownMenuComponent,
    CalldashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainlayourtModule,
    CallModule,
    NgbPaginationModule, 
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,NgbPaginationModule, 
    NgbAlertModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
