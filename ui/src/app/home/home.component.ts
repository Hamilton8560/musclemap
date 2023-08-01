import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentDate: Date;
  image=true
  user$ = this.userService.user$;
  constructor(private userService:UserService){}
  
  ngOnInit(){
    this.currentDate = new Date()

  }
  handleImageError(event:any):void{
    this.image=false
    event.target.src="/musclemap/ui/src/assets/userIcon.png"
  }
  getNextDays(numDays: number): { dayNumber: number; dayLetter: string }[] {
    const days: { dayNumber: number; dayLetter: string; odd: number }[] = [];
    const today = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let odd:number=0
    for (let i = 0; i < numDays; i++) {
      odd=i
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayNumber = nextDate.getDate();
      const dayIndex = nextDate.getDay();
      const dayName = dayNames[dayIndex];
      const firstLetter = dayName.charAt(0);
      days.push({ dayNumber: dayNumber, dayLetter: firstLetter, odd: odd });
    }

    return days;
  }
   
  
  



}
