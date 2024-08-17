import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private document: Document,
    private vcr: ViewContainerRef,
  ) {}
  showSuccess(message: string): void {
    // const el = this.vcr.createEmbeddedView()
    // this.document.appendChild()
  }
}
