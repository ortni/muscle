import { Injectable } from '@angular/core';
import { LocusCore } from '@ortni/locus';

@Injectable({ providedIn: 'root' })
export class DateFmt {
  get store() {
    return this.locus.store.text.date;
  }
  constructor(private locus: LocusCore) {
  }

  format(f, since, until) {
    return this[f](since, until);
  }

  private duration(since, until) {
    let dt = (since - until) / 1000;
    const y = dt / 31536000;
    dt = dt % 31536000;
    const m = Math.ceil(dt / 2592000);
    return `${y} years ${m} months`;
  }

  private endAtAgo(since, until) {
    return this.ago(until);
  }

  private beginAtAgo(since, until) {
    return this.ago(since);
  }

  private ago(time) {
    const now: any = new Date();
    const dt = (now - time) / 1000;
    return `${Math.round(dt / 3153600) / 10} years ago`;
  }

  private short(since, until) {
    return [this.shortDate(since), '-', this.shortDate(until)].join(' ');
  }

  private shortDate(d) {
    const month = this.store.month.short;
    const y = d.getFullYear();
    const m = month[d.getMonth()];
    return `${m}, ${y}`;
  }
}
