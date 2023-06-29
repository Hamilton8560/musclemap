import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  logoPath = '../assets/logo.png';
  constructor(private router: Router){}

  onLogin(){
    this.router.navigate(['login'])
  }

  onRegister(){
    this.router.navigate(['register'])
  }

}
