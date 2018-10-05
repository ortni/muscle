import { Injectable } from '@angular/core';

import { AES, enc } from 'crypto-js';
import { environment as env } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppData {
  title = '';
  data;
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
    const ch = AES.decrypt(data, key).toString(enc.Utf8);
    return JSON.parse(ch || '{}');
  }
}
