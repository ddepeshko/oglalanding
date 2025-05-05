import { Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: 'oglalanding', component: AppComponent },
  { path: '', redirectTo: 'oglalanding', pathMatch: 'full' }
];
