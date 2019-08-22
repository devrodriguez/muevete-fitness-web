import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: UserModel = new UserModel();

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    this.loginService.login(this.user).subscribe(data => {
      form.reset();
      this.router.navigateByUrl('home');
    }, error => {
      console.log(error);
    });
  }

}
