import { Injectable } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { tap, map } from 'rxjs/operators';
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
    const { id, dataset } = this.option;
    return forkJoin(this.reqs(id, dataset, key)).pipe(map(list => {
      return this.store;
    }));
  }

  private reqs(id, dataset, key) {
    return [
      this.text.load(id).pipe(this.save('text')),
      ...dataset.map(d => this.data.load(`${id}/${d}`, key).pipe(this.save(d)))
    ];
  }

  private save(key) {
    return tap((data) => {
      this.store[key] = data;
    });
  }
}
