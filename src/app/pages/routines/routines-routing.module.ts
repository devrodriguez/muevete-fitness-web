import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduledRoutineComponent } from './scheduled/scheduled-routine.component';
import { ConfigureRoutineComponent } from './configure/configure-routine.component';


const routes: Routes = [
  { 
    path: '', 
    component: ScheduledRoutineComponent
  },
  { 
    path: 'scheduled', 
    component: ScheduledRoutineComponent
  },
  { 
    path: 'configure', 
    component: ConfigureRoutineComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutinesRoutingModule { }
