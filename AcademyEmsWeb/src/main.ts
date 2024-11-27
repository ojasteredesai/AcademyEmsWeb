import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AcademyEmsAppModule } from './app/Home/AcademyEmsApp.MainModule';

platformBrowserDynamic().bootstrapModule(AcademyEmsAppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
