import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgottenComponent } from './forgotten/forgotten.component';


const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'forgotten', 
    component: ForgottenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
