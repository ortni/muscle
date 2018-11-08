import { HostListener, Input, Component } from '@angular/core';

import { DateFmt } from './date.fmt';

@Component({
  selector: 'ck-period',
  templateUrl: './period.tag.html',
  styleUrls: ['./period.tag.sass']
})
export class PeriodTag {
  @Input() set data({ since, until }) {
    this.since = this.toDate(since);
    this.until = this.toDate(until);
    this.view = this.dfmt.format(null, this.since, this.until);
  }

  view = '';
  since = new Date();
  until = new Date();
  constructor(private dfmt: DateFmt) {
    dfmt.fmtChanged.subscribe(fmt => {
      this.view = dfmt.format(fmt, this.since, this.until);
    });
  }

  @HostListener('click', ['$event'])
  onclick() {
    this.dfmt.nextFmt();
  }

  private toDate(str) {
    const y = str.substr(0, 4);
    const m = str.substr(4, 2);
    const d = str.substr(6, 2);
    return new Date(y, m, d);
  }
}
