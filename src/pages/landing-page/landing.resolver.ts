import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LocusCore } from '@ortni/locus';

@Injectable({ providedIn: 'root' })
export class LandingResolver implements Resolve<any> {

  constructor(private data: LocusCore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { ln = 'en', call = '' } = route.queryParams;
    return this.data.use({ id: ln, dataset: ['db', 'landing'] }, call);
  }
}
