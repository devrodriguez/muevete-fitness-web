import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  ip: string = "192.168.0.29:8000";

  constructor(private http: HttpClient) { }

  getAllScheduled() {
    return this.http.get(`http://${this.ip}/routines/reports/scheduled/0`);
  }

  getScheduled(id) {
    return this.http.get(`http://${this.ip}/routines/reports/scheduled/${id}`);
  }

  getAllRoutines() {
    return this.http.get(`http://${this.ip}/routines`);
  }
}
