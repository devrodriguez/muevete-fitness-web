import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledRoutineComponent } from './scheduled-routine.component';

describe('RoutinesComponent', () => {
  let component: ScheduledRoutineComponent;
  let fixture: ComponentFixture<ScheduledRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
