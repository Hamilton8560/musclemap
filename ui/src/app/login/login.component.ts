import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user
loggedIn
loginForm:FormGroup=this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required, Validators.minLength(3)]
})
  constructor(private authService: SocialAuthService,private fb: FormBuilder) {}

  ngOnInit(){
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.loggedIn=(user!=null);
      console.log(this.user)
    })
  }
  onSubmit(){
    if(this.loginForm.invalid){
      return
    }
    console.log(this.loginForm.value);
  }
  toggleShow() {
   
  }

}
