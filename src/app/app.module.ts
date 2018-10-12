import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { environment as env } from '../environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  loadChildren: '../pages/pages.module#PagesModule'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: env.baseHref }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
