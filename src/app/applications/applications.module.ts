import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GenTextComponent } from './gen-text/gen-text.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'gen-text', component: GenTextComponent }
    ])
  ],
})
export class ApplicationsModule { }
