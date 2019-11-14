import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { ProductsComponent } from './pages/products/sale/products.component';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'routine',
    loadChildren: () => import('./pages/routines/routines.module').then(mod => mod.RoutinesModule)
  },
  { 
    path: 'home', 
    component: DashboardComponent 
  },
  { 
    path: 'products', 
    loadChildren: () => import('./pages/products/products.module').then(mod => mod.ProductsModule)
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
