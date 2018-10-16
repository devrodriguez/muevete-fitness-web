import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  
  newTrainer: any = new Object();
  trainers: any = new Array();
  professions: any = new Array();

  constructor(private trainerService: TrainerService, private professionService: ProfessionService) { 
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
    this.professionService.getProfessions().subscribe(professions => {
      this.professions = professions;
    });
  }

  createTrainer() {
    console.log(this.newTrainer);
    this.trainerService.createTrainer(this.newTrainer).subscribe(res => {
      console.log(res);
    });

    this.newTrainer = new Object();
  }

  updateTrainer(trainer) {
    this.trainerService.updateTrainer(trainer).subscribe(res => {
      console.log(res);
    });
  }

}
