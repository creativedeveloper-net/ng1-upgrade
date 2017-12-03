import { ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarDirective } from './ng1/bar/bar.ng.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    FooComponent,
    BarDirective
  ],
  entryComponents: [
    AppComponent,
    FooComponent
  ]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {};
}
