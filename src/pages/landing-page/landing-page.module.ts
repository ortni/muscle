import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@ortni/ui';

import { CakeModule } from '@ortni/cake';

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
  imports: [
    UiModule,
    CakeModule,
    CommonModule,
  ],
  declarations: [
    ...tags,
    LandingPage,
  ],
  exports: [
    LandingPage,
  ]
})
export class LandingPageModule { }
