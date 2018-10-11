import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LocusCore } from '@ortni/locus';

@Injectable({ providedIn: 'root' })
export class LandingResolver implements Resolve<any> {

  constructor(private store: LocusCore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { ln = 'en', call = '' } = route.queryParams;
    return this.store.use({ id: ln }, call);
  }
}
