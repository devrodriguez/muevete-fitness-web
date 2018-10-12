import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'trainers', component: TrainersComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);