import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HeaderComponent} from './header/header.component';

import { from } from 'rxjs';
const routes: Routes = [

  {path: 'home', component: HeaderComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
