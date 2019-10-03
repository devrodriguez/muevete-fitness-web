import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarModule } from './components/navbar/navbar.module';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  const routes: Routes = [
    {
      path: 'home',
      component: DashboardComponent
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        NavbarModule
      ]
    }).compileComponents();

    //Get
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Muevete Fitness'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Muevete Fitness');
  }));

  fit('get home route', fakeAsync(() => {
    router.navigate(['/home']);
    tick(50);
    expect(location.path()).toBe('/home');
  }));
  
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Muevete Fitness!');
  // }));
});
