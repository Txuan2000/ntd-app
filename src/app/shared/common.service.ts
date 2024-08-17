import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    // private translate: TranslateService,
    private messageService: MessageService,
  ) {}
  // trans(data: any, params: any = null) {
  //   let result: string = '';
  //   try {
  //     this.translate.get(data, params).subscribe(res => {
  //       result = res;
  //     })

  //   } catch (error) {
  //     this.translate.get('undefined').subscribe(res => {
  //       result = res;
  //     })
  //   }
  //   return result;
  // }
  messageRes(message: any, params: any = null) {
    // this.messageService.clear();
    // this.messageService.add({
    //   severity: 'success', summary: this.trans(message, params),
    //   life: 3000
    // });
  }
  messageErr(message: any, params: any = null) {
    // this.messageService.clear();
    // this.messageService.add({
    //   severity: 'error', summary: this.trans(message, params),
    //   life: 3000
    // });
  }
  messageWarn(message: any, params: any = null) {
    // this.messageService.clear();
    // this.messageService.add({
    //   severity: 'warning', summary: this.trans(message, params),
    //   life: 3000
    // });
  }
  encode(value: any, scret = 'helloDungeon2k'): string {
    return btoa(`${scret}${encodeURIComponent(value)}`);
  }
  decode(value: any, scret = 'helloDungeon2k'): string {
    const encodedValue = value.replace(`${scret}`, '');
    return decodeURIComponent(atob(encodedValue));
  }
}
