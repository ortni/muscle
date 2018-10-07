import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataResolver } from './data.resolver';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  resolve: { data: DataResolver },
  loadChildren: '../pages/pages.module#PagesModule'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
