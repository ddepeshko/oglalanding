import { Routes } from '@angular/router';
import { OfertaPageComponent } from './modules/oferta-page/oferta-page.component';
import { MainPageComponent } from './modules/main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'oferta-page', component: OfertaPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
