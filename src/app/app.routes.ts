import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'apps', pathMatch: 'full' },
  {
    path: 'apps',
    loadChildren: () => import('./applications/applications.routes').then(m => m.routes)
  }
];
