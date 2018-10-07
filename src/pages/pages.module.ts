import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiModule } from '@ortni/ui';
import { LandingPage } from './landing-page/landing.page';

const routes: Routes = [{
  path: '',
  component: LandingPage
  // }, {
  //   path: 'summary',
  //   component: SummaryPage
  // }, {
  //   path: 'techs',
  //   loadChildren: 'tech-page#TechPageModule'
  // }, {
  //   path: 'exp',
  //   loadChildren: 'exp-page#ExpPageModule'
  // }, {
  //   path: 'project',
  //   loadChildren: 'project-page#ProjectPageModule'
}];

@NgModule({
  declarations: [
    LandingPage
    // SummaryPage,
  ],
  imports: [
    UiModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesModule { }
