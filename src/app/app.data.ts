import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment as env } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppData {
  parsed;
  noData = true;

  constructor(private title: Title) {
    const t = env.title || 'Untitled';
    this.title.setTitle(t);
  }
}
