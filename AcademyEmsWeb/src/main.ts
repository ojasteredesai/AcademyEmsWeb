import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CourseTypeAppModule } from './app/AcademyEmsApp.MainModule';

platformBrowserDynamic().bootstrapModule(CourseTypeAppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
