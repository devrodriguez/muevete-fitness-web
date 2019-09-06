import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';


@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  private appConfig: AppConfig = new AppConfig();

  constructor(private http: HttpClient) { }

  getAllScheduled() {
    return this.http.get(`${this.appConfig.apiUrl}/routines/reports/scheduled/0`);
  }

  getScheduled(id, date) {
    return this.http.get(`${this.appConfig.apiUrl}/routines/reports/scheduled?id=${id}&date=${date}`);
  }

  getAllRoutines() {
    return this.http.get(`${this.appConfig.apiUrl}/routines`);
  }

  getAvailableDays() {
    return this.http.get(`${this.appConfig.apiUrl}/availableDays`);
  }

  getAllSessions() {
    return this.http.get(`${this.appConfig.apiUrl}/sessions`);
  }

  getRoutineSchedule() {
    return this.http.get(`${this.appConfig.apiUrl}/routines/schedule`);
  }

  deleteRoutineSchedule(schedule: any) {
    return this.http.post(`${this.appConfig.apiUrl}/routines/schedule/remove`, schedule);
  }

  createRoutineSchedule(schedule: any) {
    return this.http.post(`${this.appConfig.apiUrl}/routines/schedule/create`, schedule);
  }
}
