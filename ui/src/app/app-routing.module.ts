import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { GoalOptionsComponent } from './goal-options/goal-options.component';


const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'goal-options', component:GoalOptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
