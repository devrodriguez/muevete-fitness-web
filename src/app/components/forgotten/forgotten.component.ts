import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css']
})
export class ForgottenComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  send(form: NgForm) {
    let user: UserModel = {
      email: form.value.email,
      password: null
    };

    this.loginService.passwordForgotten(user)
    .subscribe(res => {
      this.router.navigateByUrl('login');
    }, error => {
      console.log(error);
    })
  }

}
