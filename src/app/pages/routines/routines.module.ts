import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutinesRoutingModule } from './routines-routing.module';
import { ConfigureRoutineComponent } from './configure/configure-routine.component';
import { ScheduledRoutineComponent } from './scheduled/scheduled-routine.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

//Fonts Awsome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faKey, faSignInAlt, faSave, faEdit, faTrash, faAlignJustify, faCalendar } from '@fortawesome/free-solid-svg-icons';

//ngx bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    ConfigureRoutineComponent, 
    ScheduledRoutineComponent
  ],
  imports: [
    CommonModule,
    RoutinesRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NavbarModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class RoutinesModule { 
  constructor() {
    library.add(faUser, faKey, faSignInAlt, faSave, faEdit, faTrash, faAlignJustify, faCalendar);
  }
}
