import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AppData } from './app.data';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<any>{

  constructor(private title: Title,
    private data: AppData) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { call = '' } = route.queryParams;
    this.data.load(call);
    this.title.setTitle(this.data.title);
    return new Promise((rsv) => {
      rsv({});
    });
  }
}
