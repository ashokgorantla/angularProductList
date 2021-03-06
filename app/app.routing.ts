import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
];

export const routing: ModuleWithProviders =
               RouterModule.forRoot(appRoutes);
