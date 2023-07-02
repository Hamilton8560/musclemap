import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalOptionsComponent } from './goal-options.component';

describe('UserGoalsComponent', () => {
  let component: GoalOptionsComponent;
  let fixture: ComponentFixture<GoalOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
