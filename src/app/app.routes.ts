import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'apps',
    loadChildren: () => import('./applications/applications.routes').then(m => m.routes)
  }
];
