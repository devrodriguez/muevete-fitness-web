import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  getTrainers() {
    return this.http.get('http://localhost:8000/trainers');
  }

  getProfessions() {
    return this.http.get('http://localhost:8000/professions');
  }
}
