import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gen-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gen-text.component.html',
  styleUrl: './gen-text.component.scss'
})
export class GenTextComponent {
  title: string = 'common.title.generateString';
  showSuccess: boolean = false;
  value: any;
  result = viewChild<ElementRef<HTMLTextAreaElement>>('srcText')
  source = viewChild<ElementRef<HTMLTextAreaElement>>('resText')
  len = viewChild<ElementRef<HTMLTextAreaElement>>('resLength')

  /**
   * Copy giá trị của 1 ô nhập liệu vào clipboard
   * @param inputElement element được copy giá trị
   */
  copyText(inputElement: any): void {
    const resultRef = this.result();
    if (!resultRef?.nativeElement?.value?.length) {
      return
    }
    navigator.clipboard.writeText(inputElement.value);
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
  /**
   * thực hiện sinh chuỗi
   * @param source element nguồn
   * @param times element chứa số ký tự
   * @param res element kết quả
   */
  gentext(): void {
    const source = this.source()?.nativeElement?.value;
    const times = this.len()?.nativeElement?.value;
    const res = this.result()?.nativeElement;
    if (!source || !times || !res) {
      return;
    }
    let temp_text = '';
    let temp_times = Math.floor(+times / source.toString().length);

    let temp_times2 = temp_times;
    while (temp_times) {
      temp_text = temp_text.concat(source);
      --temp_times;
    }
    let newTextLength = temp_times2 * source.length;

    if (newTextLength < +times) {
      temp_text = temp_text.concat(source.substring(0, +times - newTextLength));
    }
    res.value = temp_text;
    res.focus();
  }
}
