import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  news: any[] = [];

  constructor(private utilService: UtilService) { 
    this.getNews();
  }

  ngOnInit() {
  }

  getNews() {
    this.utilService.getNews()
    .subscribe(res => {
      this.news = res['articles'];
    })
  }

}
