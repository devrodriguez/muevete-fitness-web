import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgottenComponent } from './forgotten/forgotten.component';

//Fontawsome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faUser, 
  faKey, 
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    LoginComponent,
    ForgottenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AuthRoutingModule,
    NavbarModule
  ]
})
export class AuthModule { 
  constructor() {
    library.add(faUser, faKey, faSignInAlt);
  }
}
