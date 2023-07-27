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

  buttonIdOne: any = ''
  buttonIdTwo: any = ''
  userSelect: any;
  div1:boolean=true;
  div2:boolean=false;

  constructor(private router: Router, private formBuilder: FormBuilder){}

  goalOption(userSelect){
    this.buttonIdOne = userSelect;
    if (this.buttonIdOne) {
      this.loseWeight();
    } else if (this.buttonIdOne) {
      this.gainMuscle();
    } else if (this.buttonIdOne) {
      this.neither();
    }
  }

  subOption(userSelect){
    this.buttonIdTwo = userSelect;
    if (this.buttonIdOne) {
      this.yearly();
    } else if (this.buttonIdTwo) {
      this.monthly();
    } else if (this.buttonIdTwo) {
      this.free();
    }
  }

  loseWeight() {  
  }

  gainMuscle() {
  }

  neither() {
  }

  yearly() {  
  }
  
  monthly() {
  }
  
  free() {
  }  

  next(){
    this.div1 = false
    this.div2 = true
  }

  subscription(){
    //apiService.post
  }

  onLogin(){
    this.router.navigate(['login'])
  }

  skip(){
  }

}
