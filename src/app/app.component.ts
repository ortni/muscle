import { Component } from '@angular/core';

import { AppData } from './app.data';

@Component({
  selector: 'ooo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  get data() {
    return this.app.data;
  }
  constructor(private app: AppData) {
  }
}
