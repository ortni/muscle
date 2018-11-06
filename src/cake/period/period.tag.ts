import { Input, Component } from '@angular/core';

import { DateFmt } from './date.fmt';

const fmts = ['short', 'beginAtAgo', 'endAtAgo', 'duration', 'shortSeason'];

@Component({
  selector: 'ck-period',
  templateUrl: './period.tag.html',
  styleUrls: ['./period.tag.sass']
})
export class PeriodTag {
  @Input() set data({ since, until }) {
    this.since = this.toDate(since);
    this.until = this.toDate(until);
    this.fmt = this._fmt;
  }
  @Input() set fmt(v) {
    this._fmt = v;
    this.view = this.dfmt.format(v, this.since, this.until);
  }

  view = '';
  since = new Date();
  until = new Date();
  private _fmt = 'short';
  constructor(private dfmt: DateFmt) {}

  private toDate(str) {
    const y = str.substr(0, 4);
    const m = str.substr(4, 2);
    const d = str.substr(6, 2);
    return new Date(y, m, d);
  }
}
