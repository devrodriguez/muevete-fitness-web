import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=co&apiKey=728819d11e8d41ae9a6662bf6ea79aec');
  }
}
