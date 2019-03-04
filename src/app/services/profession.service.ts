import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  ip: string = "192.168.56.1:8000";

  constructor(private http: HttpClient) { }

  getProfessions() {
    return this.http.get(`http://${this.ip}/professions`)
  }
}
