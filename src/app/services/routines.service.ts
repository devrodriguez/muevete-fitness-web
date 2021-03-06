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

  getRoutineAvailability() {
    return this.http.get(`${this.appConfig.apiUrl}/routines/availableDay`);
  }

  deleteRoutineAvailability(avRoutine: any) {
    return this.http.post(`${this.appConfig.apiUrl}/routines/availableDay/remove`, avRoutine);
  }

  createRoutineAvailability(avRoutine: any) {
    return this.http.post(`${this.appConfig.apiUrl}/routines/availableDay/create`, avRoutine);
  }

  getRoutineCategory() {
    return this.http.get(`${this.appConfig.apiUrl}/routines/bycategory`);
  }

  deleteRoutineCategory(routineCat) {
    return this.http.post(`${this.appConfig.apiUrl}/routines/bycategory/remove`, routineCat);
  }

  createRoutineCategory(data) {
    return this.http.post(`${this.appConfig.apiUrl}/routines/bycategory/create`, data);
  }
}
