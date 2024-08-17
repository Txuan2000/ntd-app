import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  computed,
  ElementRef,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gen-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gen-text.component.html',
  styleUrl: './gen-text.component.scss',
})
export class GenTextComponent implements AfterContentInit {
  title = 'common.title.generateString';
  showSuccess = false;
  value: any;
  result = viewChild<ElementRef<HTMLTextAreaElement>>('resText');
  source = viewChild<ElementRef<HTMLInputElement>>('srcText');
  len = viewChild<ElementRef<HTMLInputElement>>('resLength');

  /**
   * Copy giá trị của 1 ô nhập liệu vào clipboard
   * @param inputElement element được copy giá trị
   */
  copyText(inputElement: any): void {
    const resultRef = this.result();
    if (!resultRef?.nativeElement?.value?.length) {
      return;
    }
    navigator.clipboard.writeText(inputElement.value);
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  ngAfterContentInit(): void {}
  /**
   * thực hiện sinh chuỗi
   * @param source element nguồn
   * @param times element chứa số ký tự
   * @param res element kết quả
   */
  gentext(): void {
    const res = this.result()?.nativeElement;
    const src = this.source()?.nativeElement?.value ?? '';
    const len = +(this.len()?.nativeElement?.value ?? 0);

    if (!src || !len || !res) {
      return;
    }

    let temp_text = '';
    let temp_times = Math.floor(len / src?.length);
    const temp_times2 = temp_times;
    while (temp_times) {
      temp_text = temp_text.concat(src);
      --temp_times;
    }
    const newTextLength = temp_times2 * src?.length;

    if (newTextLength < len) {
      temp_text = temp_text.concat(src?.substring(0, len - newTextLength));
    }
    res.value = temp_text;
    res.focus();
  }
}
