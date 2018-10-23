import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@ortni/ui';

import { HeroTag } from './hero/hero.tag';
import { ExpertiseTag } from './expertise/expertise.tag';
import { EducationTag } from './education/education.tag';
import { LandingPage } from './landing.page';

const tags = [
  HeroTag,
  EducationTag,
  ExpertiseTag
];

@NgModule({
  declarations: [
    ...tags,
    LandingPage,
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
