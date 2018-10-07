import { NgModule } from '@angular/core';

import { ViewComponent } from './view/view.component';

const exp = [
  ViewComponent
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
