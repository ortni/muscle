import { Injectable } from '@angular/core';

import { AES, enc } from 'crypto-js';
import { environment as env } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppData {
  title = '';
  data;
  noData = true;
  private edata = env.data;

  constructor() {
    this.title = env.title || 'Untitled';
  }

  load(key = '') {
    const d = this.edata;
    this.data = env.production ? this.decryption(d, key) : d;
    this.title = this.data.title || this.title;
  }

  private decryption(data, key) {
    let r = '';
    if (key) {
      r = AES.decrypt(data, key).toString(enc.Utf8);
    }
    this.noData = !r;
    return JSON.parse(r || '{}');
  }
}
