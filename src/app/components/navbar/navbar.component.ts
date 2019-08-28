import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //visible: boolean = true;

  constructor(private router: Router) {
    /*
    this.router.events.subscribe(evt => {
      if(evt instanceof NavigationEnd){
        console.log(evt['url'])
        if(evt['url'] == '/login' || evt['url'] == '/' || evt['url'] == '/forgotten') {
          this.visible = false;     
        }
        else
        {
          this.visible = true;
        }
      }
    });
    */
  }

  ngOnInit() {
  }

}
