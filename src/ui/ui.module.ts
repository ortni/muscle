import { NgModule } from '@angular/core';

import { IconTag } from './icon/icon.tag';
import { ViewTag } from './view/view.tag';

const exp = [
  IconTag,
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
