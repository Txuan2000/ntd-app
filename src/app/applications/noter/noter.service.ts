import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Injectable({
  providedIn: 'root',
})
export class NoterService {
  constructor(private common: CommonService) {}
  saveToLocalStorage(key: string, data: string): void {
    console.log(this.common.encode(data));
    localStorage.setItem(key, this.common.encode(data));
  }
}
