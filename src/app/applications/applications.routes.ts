import { Routes } from '@angular/router';
import { GenTextComponent } from './gen-text/gen-text.component';

export const routes: Routes = [
  { path: '', redirectTo: 'gen-text', pathMatch: 'full' },
  { path: 'gen-text', component: GenTextComponent },
  { path: '**', redirectTo: 'applications' }
];
``