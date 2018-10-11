import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AES, enc } from 'crypto-js';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LocusLoader {
  constructor(private http: HttpClient) {}
  text(id = 'en') {
    return this.get('text', id + '.json');
  }
  data(id = 'en', key = '') {
    return this.get('data', id, {responseType: 'text'}).pipe(map(r => {
      return this.decrypt(r, key);
    }));
  }

  private get(res, id, params = {}) {
    return this.http.get(`/assets/locale/${res}/${id}`, params);
  }

  private decrypt(data, key) {
    let r = '';
    if (key) {
      r = AES.decrypt(data, (key + '-').repeat(3)).toString(enc.Utf8);
    }
    return JSON.parse(r || '{}');
  }
}
