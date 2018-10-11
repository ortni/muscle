import { NgModule } from '@angular/core';

import { ViewTag } from './view/view.tag';

const exp = [
  ViewTag
];

@NgModule({
  declarations: [
    ...exp
  ],
  exports: [
    ...exp
  ]
})
export class UiModule {}
