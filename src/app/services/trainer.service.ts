import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  ip: string = "192.168.56.1:8000";

  constructor(private http: HttpClient) { }

  getTrainers() {
    return this.http.get(`http://${this.ip}/trainers`);
  }

  createTrainer(trainer: any) {
    return this.http.post(`http://${this.ip}/trainers`, trainer);
  }

  updateTrainer(trainer: any) {
    return this.http.put(`http://${this.ip}/trainers/${trainer.id}`, trainer);
  }

  uploadFile(fd:any) {
    return this.http.post(`http://${this.ip}/trainers/upload-file`, fd);
  }
}
