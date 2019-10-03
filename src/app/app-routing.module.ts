import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'routine',
    loadChildren: () => import('./components/routines/routines.module').then(mod => mod.RoutinesModule)
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
