import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/services/trainer.service';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  
  newTrainer: any = { images: [] };
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

  getFile(event) {
    var reader = new FileReader();
    var that = this;
    var files = event.target.files;
    
    reader.onloadend = function() {
      that.newTrainer.image = reader.result;
      console.log(reader.result);
    }
  
    reader.readAsDataURL(files[0])
  }

  uploadImage(event) {
    const fd = new FormData();

    fd.append('image', this.newTrainer.image, 'myfile.png');

    this.trainerService.uploadFile(fd).subscribe(res => {
      console.log(res);
    })
  }

  createTrainer() {
    
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
