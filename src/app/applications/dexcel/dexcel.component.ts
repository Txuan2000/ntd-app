import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  viewChild,
} from '@angular/core';
import jspreadsheet from 'jspreadsheet';
@Component({
  selector: 'app-dexcel',
  standalone: true,
  imports: [],
  templateUrl: './dexcel.component.html',
  styleUrl: './dexcel.component.scss',
})
export class DexcelComponent implements AfterViewInit {
  spreadsheet = viewChild<ElementRef>('spreadsheet');
  file = viewChild<ElementRef<HTMLInputElement>>('fileControl');
  constructor() {}
  ngAfterViewInit(): void {
    const file = this.file()?.nativeElement;
    if (!file) {
      return;
    }
    const jssEl = this.spreadsheet();
    if (!jssEl) {
      return;
    }
    file.onchange = (e: any) => {
      jspreadsheet.destroy(jssEl.nativeElement);
      jspreadsheet.parser({
        file: e.target.files[0],
        locale: 'en-GB',
        onload: (config: any) => {
          console.log(config);

          jspreadsheet(jssEl.nativeElement, {
            ...config,
            toolbar: true,
            editable: false,
          });
        },
        onerror: (error: any) => {
          alert(error);
        },
      });
    };
  }
  onLoadFile(e: any) {
    if (e.target?.files?.length) {
      const file: File = e.target.files[0];
      // jspreadsheet(this.spreadsheet()?.nativeElement, {})
      console.log(file);
    }
  }
}
