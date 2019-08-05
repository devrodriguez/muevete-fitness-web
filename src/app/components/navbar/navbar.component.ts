import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visible: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(evt => {
      if(evt instanceof NavigationStart){
        console.log(evt['url'])
        if(evt['url'] == '/login') {
          this.visible = false;     
        }
        else
        {
          this.visible = true;
        }
      }
    });
  }

  ngOnInit() {
  }

}
