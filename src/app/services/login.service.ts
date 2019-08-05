import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ip: string = "192.168.0.29:8000";

  constructor(private http:HttpClient) { }

  login(user) {
    return this.http.post(`http://${this.ip}/auth/login`, user);
  }
}
