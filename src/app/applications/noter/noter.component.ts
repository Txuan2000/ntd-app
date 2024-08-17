import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-noter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './noter.component.html',
  styleUrl: './noter.component.scss',
})
export class NoterComponent {
  form = new FormGroup<{
    title: FormControl<string | null>;
    content: FormControl<string | null>;
  }>({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });
  addToList() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.form.reset();
  }
}
