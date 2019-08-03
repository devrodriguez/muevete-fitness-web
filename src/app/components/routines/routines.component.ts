import { Component, OnInit } from '@angular/core';
import { RoutinesService } from 'src/app/services/routines.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  schedules: any = [];
  routines: any = [];
  selectedRoutine: number = 0;

  constructor(private routineService: RoutinesService) { }

  ngOnInit() {
    //Get all routines
    this.routineService.getAllRoutines().subscribe(data => {
      this.selectedRoutine = data[0]['id'];
      this.routines = data;
      this.getScheduled(this.selectedRoutine);
    });

  }

  getScheduled(id: number) {
    //Get routines scheduled
    this.routineService.getScheduled(id).subscribe(data => {
      this.schedules = data;
    });
  }

  routineChange(event) {
    console.log(event.target.value)
    this.getScheduled(event.target.value);
  }

}
