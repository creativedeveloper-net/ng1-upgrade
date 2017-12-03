import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { Ng1AppComponent } from './ng1app.component';
import { AppComponent } from '../app.component';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from '../foo/foo.component';

export const Ng1AppModule = angular.module('ng1AppModule', [])
  .component('ng1AppRoot', Ng1AppComponent)
  .component('bar', BarComponent)
  .directive('appRoot', downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory)
  .directive('foo', downgradeComponent({ component: FooComponent }) as angular.IDirectiveFactory);
