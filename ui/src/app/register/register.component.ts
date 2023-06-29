import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup=this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(3)]
  })
  constructor(private router: Router, private formBuilder: FormBuilder){}
  
  onLogin(){
    this.router.navigate(['login'])
  }

}
