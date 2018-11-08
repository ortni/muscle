import { Injectable, EventEmitter } from '@angular/core';
import { LocusCore } from '@ortni/locus';

const msYear = 31536000000;
const msMonth = 2592000000;
const fmts = ['short', 'beginAtAgo', 'endAtAgo', 'duration', 'shortSeason'];

@Injectable({ providedIn: 'root' })
export class DateFmt {
  fmtInx = 0;
  fmtChanged = new EventEmitter();
  get store() {
    return this.locus.store.text.date;
  }
  constructor(private locus: LocusCore) {
  }

  nextFmt() {
    this.fmtInx = (this.fmtInx + 1) % fmts.length;
    this.fmtChanged.emit(fmts[this.fmtInx]);
  }

  format(f, since, until) {
    // console.log(f)
    f = f || fmts[this.fmtInx];
    return this[f](since, until);
  }

  private short(since, until) {
    return [this.fmtDt(since), this.fmtDt(until)].join(' ~ ');
  }

  private shortSeason(since, until) {
    return [this.fmtSq(since), this.fmtSq(until)].join(' ~ ')
  }

  private duration(since, until) {
    return this.fmt('duration', this.ym(since, until));
  }

  private endAtAgo(since, until) {
    return this.fmtAgo('endAtAgo', until);
  }

  private beginAtAgo(since, until) {
    return this.fmtAgo('beginAtAgo', since);
  }

  private fmt(tplk, data) {
    const tpl = this.store.format[tplk];
    return Object.keys(data).reduce((r, k) => {
      return r.replace(`#{${k}}`, data[k]);
    }, tpl);
  }

  private fmtSq(dt) {
    const yyyy = dt.getFullYear();
    const seasons = this.store.season.short;
    const ss = seasons[Math.floor(dt.getMonth() / 3)];
    return this.fmt('shortSeason', { yyyy, ss });
  }

  private fmtDt(dt) {
    const yyyy = dt.getFullYear();
    const month = this.store.month.short;
    const mmm = month[dt.getMonth()];
    return this.fmt('short', { yyyy, mmm });
  }

  private fmtAgo(tpl, dt) {
    const { year: uy, month: um } = this.store.duration;
    const { y, m } = this.ym(dt, Date.now());
    const time = `${y} ${uy}, ${m} ${um}`;
    return this.fmt(tpl, { time });
  }

  private ym(since, until) {
    const dt = until - since;
    const y = Math.floor(dt / msYear);
    const m = Math.ceil((dt % msYear) / msMonth);
    return { y, m };
  }
}
