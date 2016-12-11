import 'babel-polyfill';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NG2SeedModule } from './app/ng2-seed.module';

platformBrowserDynamic().bootstrapModule(NG2SeedModule);
