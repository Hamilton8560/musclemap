import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { GoalOptionsComponent } from './goal-options/goal-options.component';


const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'confirmation', component:ConfirmationComponent},
  {path:'home', component:HomeComponent},
  {path: 'goal-options', component:GoalOptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
