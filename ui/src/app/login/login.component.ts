import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedIn = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private authService: SocialAuthService,
    private fb: FormBuilder,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user: SocialUser) => {
      this.loggedIn = !!user;
      console.log(user);
      this.userService.setUser(user); // Set the user in the UserService
      this.router.navigate(['home']);
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  toggleShow() {
    // Implement the function to toggle password visibility
  }

  onRegister() {
    this.router.navigate(['register']);
  }
}
