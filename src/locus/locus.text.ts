import { Injectable } from '@angular/core';
import { LocusLoader } from './locus.loader';

@Injectable({ providedIn: 'root' })
export class LocusText {
  data: any;
  constructor(private loader: LocusLoader) {
  }
  load(id) {
    return this.loader.text(id);
  }
}
