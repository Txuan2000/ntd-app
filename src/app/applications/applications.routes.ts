import { Routes } from '@angular/router';
import { GenTextComponent } from './gen-text/gen-text.component';
import { NoterComponent } from './noter/noter.component';
import { DexcelComponent } from './dexcel/dexcel.component';
import { DistanceMapComponent } from './distance-map/distance-map.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

export const routes: Routes = [
  { path: '', component: DistanceMapComponent },
  { path: 'gen-text', component: GenTextComponent },
  { path: 'noter', component: NoterComponent },
  { path: 'dexcel', component: DexcelComponent },
  { path: 'code-editor', component: CodeEditorComponent },
  { path: '**', redirectTo: 'applications' },
];
