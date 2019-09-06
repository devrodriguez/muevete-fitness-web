import { Component, OnInit } from '@angular/core';
import { RoutinesService } from 'src/app/services/routines.service';
import * as moment from 'moment';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  schedules: any = [];
  routines: any = [];
  selectedRoutine: number = 0;
  selectedDate: string = moment().format('YYYY-MM-DD');

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
    //Get routines scheduled
    this.routineService.getScheduled(this.selectedRoutine, this.selectedDate).subscribe(data => {
      this.schedules = data;
    });
  }

  routineChange() {
    this.getScheduled();
  }

  dateChange() {
    this.getScheduled();
  }

}
