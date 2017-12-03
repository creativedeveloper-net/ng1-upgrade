import angular from 'angular';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularLib } from '@angular/upgrade/static';

import { Ng1AppModule } from './app/ng1/ng1app.module';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// First we bootstrap the Angular HybridModule
setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Once Angular bootstrap is complete then we bootstrap the AngularJS module
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, [Ng1AppModule.name]);
});
