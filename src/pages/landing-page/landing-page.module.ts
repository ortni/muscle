import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@ortni/ui';

import { HeroTag } from './hero/hero.tag';
import { LandingPage } from './landing.page';

@NgModule({
  declarations: [
    LandingPage,
    HeroTag
  ],
  imports: [
    UiModule,
    CommonModule,
  ],
  exports: [
    LandingPage,
  ]
})
export class LandingPageModule { }
