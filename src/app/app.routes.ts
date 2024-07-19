import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'apps',
    loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule)
  }
];
