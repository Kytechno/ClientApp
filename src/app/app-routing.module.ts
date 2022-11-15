import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './components/call/call.component';
//import { InfocallComponent } from './components/call/infocall/infocall.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InCallComponent } from './components/in-call/in-call.component';
import { LoginComponent } from './components/login/login.component';
import { MainlayourtComponent } from './components/mainlayourt/mainlayourt.component';
import { OutCallComponent } from './components/out-call/out-call.component';
import { IsAuthenticateGuard } from './guards/is-authenticate.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainlayourtComponent,
    canActivate: [IsAuthenticateGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        component: CallComponent,
        canActivate: [IsAuthenticateGuard],
        children: [
          {
            path: '',
            redirectTo: 'call',
            pathMatch: 'full'
          },
          {
            path: 'call',
            component: CallComponent,
          }
        ]
      },
      {
        path: 'incommingcall',
        component: InCallComponent
      },
      {
        path: 'outgoingcall',
        component: OutCallComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
