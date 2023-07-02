import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-options',
  templateUrl: './goal-options.component.html',
  styleUrls: ['./goal-options.component.css']
})
export class GoalOptionsComponent {
  goalForm:FormGroup=this.formBuilder.group({
    loseWeight: [''],
    gainWeight: [''],
    neither: [''],
  })
  constructor(private router: Router, private formBuilder: FormBuilder){}

  next(){
    this.router.navigate([''])
  }

  onLogin(){
    this.router.navigate(['login'])
  }

}
