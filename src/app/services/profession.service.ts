import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private http: HttpClient) { }

  getProfessions() {
    return this.http.get(`http://192.168.6.253:8000/professions`)
  }
}
