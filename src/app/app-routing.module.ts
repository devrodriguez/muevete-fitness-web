import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ForgottenComponent } from './components/forgotten/forgotten.component';
import { ProductsComponent } from './components/products/products.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { ConfigureRoutineComponent } from './components/routines/configure-routine/configure-routine.component';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: './components/auth.module#AuthModule'
  },
  { 
    path: 'home', 
    component: DashboardComponent 
  },
  { 
    path: 'products', 
    component: ProductsComponent 
  },
  { 
    path: 'trainers', 
    component: TrainersComponent 
  },
  { 
    path: 'routines', 
    component: RoutinesComponent
  },
  { 
    path: 'configure-routine', 
    component: ConfigureRoutineComponent
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'auth/login' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
