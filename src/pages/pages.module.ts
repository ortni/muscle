import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocusModule } from '@ortni/locus';
import { LandingPageModule, LandingPage, LandingResolver } from './landing-page';

const routes: Routes = [{
  path: '',
  resolve: {
    store: LandingResolver
  },
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
    // SummaryPage,
  ],
  imports: [
    LandingPageModule,
    LocusModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
