import { Injectable } from '@angular/core';
import { LocusLoader } from './locus.loader';

@Injectable({ providedIn: 'root' })
export class LocusData {
  constructor(private loader: LocusLoader) {
  }
  load(id, key) {
    return this.loader.data(id, key);
  }
}
