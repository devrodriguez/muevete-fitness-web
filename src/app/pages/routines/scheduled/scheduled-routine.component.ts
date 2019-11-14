import { Component, OnInit } from '@angular/core';
import { RoutinesService } from 'src/app/services/routines.service';
import * as moment from 'moment';

@Component({
  selector: 'app-scheduled-routine',
  templateUrl: './scheduled-routine.component.html',
  styleUrls: ['./scheduled-routine.component.css']
})
export class ScheduledRoutineComponent implements OnInit {

  schedules: any = [];
  routines: any = [];
  selectedRoutine: number = 0;
  selectedDate: any = new Date();

  constructor(private routineService: RoutinesService) { }

  ngOnInit() {
    //Get all routines
    this.routineService.getAllRoutines()
    .subscribe(data => {
      this.selectedRoutine = data[0]['id'];
      this.routines = data;
      this.getScheduled();
    });

  }

  getScheduled() {
    let dateFormated = moment(this.selectedDate).format('DD/MM/YYYY');
    this.routineService.getScheduled(this.selectedRoutine, dateFormated)
    .subscribe(data => {
      this.schedules = data;
    });
  }

  routineChange() {
    this.getScheduled();
  }

  dateChange(date: Date) {
    this.selectedDate = date;
    this.getScheduled();
  }

}
