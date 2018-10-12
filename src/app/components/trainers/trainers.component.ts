import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  
  trainers: any = new Array();
  professions: any = new Array();

  constructor(private trainerService: TrainerService) { 
    this.getProfessions();
    this.getTrainersList();
  }

  ngOnInit() {
  }

  getTrainersList() {
    this.trainerService.getTrainers().subscribe(trainers => {
      this.trainers = trainers;
    });
  }

  getProfessions() {
    this.trainerService.getProfessions().subscribe(professions => {
      this.professions = professions;
    });
  }

}
