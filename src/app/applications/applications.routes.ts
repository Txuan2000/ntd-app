import { Routes } from '@angular/router';
import { GenTextComponent } from './gen-text/gen-text.component';
import { NoterComponent } from './noter/noter.component';

export const routes: Routes = [
  { path: '', redirectTo: 'gen-text', pathMatch: 'full' },
  { path: 'gen-text', component: GenTextComponent },
  { path: 'noter', component: NoterComponent },
  { path: '**', redirectTo: 'applications' }
];
``