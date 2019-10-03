import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureRoutineComponent } from './configure-routine.component';

describe('ConfigureRoutineComponent', () => {
  let component: ConfigureRoutineComponent;
  let fixture: ComponentFixture<ConfigureRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
