import { Routes } from '@angular/router';
import { GenTextComponent } from './gen-text/gen-text.component';
import { NoterComponent } from './noter/noter.component';
import { DexcelComponent } from './dexcel/dexcel.component';

export const routes: Routes = [
  { path: 'gen-text', component: GenTextComponent },
  { path: 'noter', component: NoterComponent },
  { path: 'dexcel', component: DexcelComponent },
  { path: '**', redirectTo: 'applications' }
];