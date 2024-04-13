import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'country', component: CountryPageComponent },
];
