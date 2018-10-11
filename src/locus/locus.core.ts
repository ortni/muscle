import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { LocusText } from './locus.text';
import { LocusData } from './locus.data';

import { LocusOption } from './locus.option';
import { options } from './locus.options';

@Injectable({ providedIn: 'root' })
export class LocusCore {
  key: string;
  option: LocusOption;
  options = options;
  store: any = {};
  constructor(
    private data: LocusData,
    private text: LocusText) {
    this.option = options[0];
  }

  sameParams(o, k) {
    return this.option === o && this.key === k;
  }

  use(option, key = '') {
    if (this.sameParams(option, key)) {
      return of({});
    }
    this.key = key;
    this.option = option || this.option;
    const { id } = this.option;
    const dataLoader = mergeMap(text => this.data.load(id, key)
      .pipe(map(data => {
        if (Object.keys(data).length > 0) {
          this.save('text', text);
          this.save('data', data);
        } else {
          this.save('text', {});
          this.save('data', {});
        }
        return this.store;
    })));
    return this.text.load(id).pipe(dataLoader);
  }

  private save(key, data) {
    this.store[key] = data;
  }
}
