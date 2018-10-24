import { Input, Component } from '@angular/core';

import { DateFormater as Dfmt } from './date.formater';

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
    const fn = `fmt_${v}`;
    this[fn]();
  }

  view = '';
  since = new Date();
  until = new Date();
  private _fmt = 'short';

  private fmt_short() {
    const v = `${Dfmt.short(this.since)} - ${Dfmt.short(this.until)}`;
    this.view = v;
  }

  private toDate(str) {
    const y = str.substr(0, 4);
    const m = str.substr(4, 2);
    const d = str.substr(6, 2);
    return new Date(`${y}-${m}-${d}`);
  }
}
