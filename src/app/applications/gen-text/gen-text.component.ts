import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gen-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gen-text.component.html',
  styleUrl: './gen-text.component.scss'
})
export class GenTextComponent {
  title: string = 'common.title.generateString';
  value: any;
  constructor(
    // protected common: CommonService
  ) { }

  ngOnInit(): void {
    // this.title = this.common.trans('common.title.generateString');    
  }
  /**
   * Copy giá trị của 1 ô nhập liệu vào clipboard
   * @param inputElement element được copy giá trị
   */
  copyText(inputElement: any): void {
    // this.common.messageRes('common.message.success');
    navigator.clipboard.writeText(inputElement.value);
  }
  /**
   * thực hiện sinh chuỗi
   * @param source element nguồn
   * @param times element chứa số ký tự
   * @param res element kết quả
   */
  gentext(source: any, times: any, res: any): void {
    let temp_text = '';
    let temp_times = Math.floor(times.value / source.value.toString().length);

    let temp_times2 = temp_times;
    while (temp_times) {
      temp_text = temp_text.concat(source.value);
      --temp_times;
    }
    let newTextLength = temp_times2 * source.value.length;

    if (newTextLength < times.value) {
      temp_text = temp_text.concat(source.value.substring(0, times.value - newTextLength));
    }
    res.value = temp_text;
    res.focus();
  }
}
