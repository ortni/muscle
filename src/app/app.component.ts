import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'ooo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private title: Title) {
    title.setTitle(env.title || 'Untitled');
  }
}
