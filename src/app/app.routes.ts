import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { LoginComponent } from './components/login/login.component';
import { ForgottenComponent } from './components/forgotten/forgotten.component';
import { ConfigureRoutineComponent } from './components/routines/configure-routine/configure-routine.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'forgotten', component: ForgottenComponent },
    { path: 'home', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'trainers', component: TrainersComponent },
    { path: 'routines', component: RoutinesComponent },
    { path: 'configure-routine', component: ConfigureRoutineComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);