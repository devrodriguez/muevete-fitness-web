import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faKey, faSignInAlt, faSave, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ProductsComponent } from './components/products/products.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { LoginComponent } from './components/login/login.component';
import { ForgottenComponent } from './components/forgotten/forgotten.component';
import { ConfigureRoutineComponent } from './components/routines/configure-routine/configure-routine.component';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TrainersComponent,
    ProductsComponent,
    RoutinesComponent,
    LoginComponent,
    ForgottenComponent,
    ConfigureRoutineComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faUser, faKey, faSignInAlt, faSave, faEdit, faTrash);
  }
}
