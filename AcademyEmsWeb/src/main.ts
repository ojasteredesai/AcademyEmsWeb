import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CourseTypeAppModule } from './app/AcademyEmsApp.module';

platformBrowserDynamic().bootstrapModule(CourseTypeAppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
