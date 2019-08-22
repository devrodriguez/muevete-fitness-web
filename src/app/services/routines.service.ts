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

  getScheduled(id) {
    return this.http.get(`${this.appConfig.apiUrl}/routines/reports/scheduled/${id}`);
  }

  getAllRoutines() {
    return this.http.get(`${this.appConfig.apiUrl}/routines`);
  }
}
