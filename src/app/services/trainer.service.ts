import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  getTrainers() {
    return this.http.get('http://192.168.6.253:8000/trainers');
  }

  createTrainer(trainer: any) {
    return this.http.post(`http://192.168.6.253:8000/trainers`, trainer);
  }

  updateTrainer(trainer: any) {
    return this.http.put(`http://192.168.6.253:8000/trainers/${trainer.id}`, trainer);
  }

}
