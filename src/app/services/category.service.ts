import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private appConfig: AppConfig = new AppConfig();

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.appConfig.apiUrl}/categories`);
  }
}
