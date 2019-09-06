import { Component, OnInit } from '@angular/core';
import { RoutinesService } from 'src/app/services/routines.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-configure-routine',
  templateUrl: './configure-routine.component.html',
  styleUrls: ['./configure-routine.component.css']
})
export class ConfigureRoutineComponent implements OnInit {

  selRoutine: any;
  selDay: any;
  selSession: any;
  routines: any[] = [];
  days: any[] = [];
  sessions: any[] = [];
  schedules: any[] = [];

  constructor(private routineService: RoutinesService) { 
    this.routineService.getAllRoutines()
    .subscribe((routines: any[]) => {
      this.routines = routines;
    },
    error => {
      console.log(error);
    });

    this.routineService.getAvailableDays()
    .subscribe((days: any[]) => {
      this.days = days;
    },
    error => {
      console.log(error);
    });

    this.routineService.getAllSessions()
    .subscribe((sessions: any[]) => {
      this.sessions = sessions;
    },
    error => {
      console.log(error);
    });

    this.getScheduled();
  }

  ngOnInit() {
  }

  save(frmRoutine: NgForm) {
    console.log(this.selRoutine);
    console.log(this.selDay);
    console.log(this.selSession);

    var schedule = {
      routine: this.selRoutine,
      day: this.selDay,
      session: this.selSession
    }

    this.routineService.createRoutineSchedule(schedule)
    .subscribe(res => {
      if(res > 0) {
        this.getScheduled();
      }
    },
    error => {

    });
  }

  delete(index, schedule) {
    this.routineService.deleteRoutineSchedule(schedule)
    .subscribe(res => {
      if(res > 0) {
        this.schedules.splice(index, 1);
      }
    },
    error => {
      console.log(error)
    });
  }

  getScheduled() {
    this.routineService.getRoutineSchedule()
    .subscribe((schedules: any[]) => {
      this.schedules = schedules;
    },
    error => {
      console.log(error);
    });
  }

}
