import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocusModule } from '@ortni/locus';

import { UiModule } from '@ortni/ui';
import { OrgTag } from './org/org.tag';
import { PeriodTag } from './period/period.tag';

const exports = [
  PeriodTag,
  OrgTag
];

@NgModule({
  imports: [
    CommonModule,
    LocusModule,
    UiModule
  ],
  declarations: [
    ...exports
  ],
  exports
})
export class CakeModule { }
