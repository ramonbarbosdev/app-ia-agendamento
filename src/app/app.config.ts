import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideEnvironmentNgxMask } from 'ngx-mask';
import ZincTheme from './layout/component/ZincTheme';
import PurpleTheme from './layout/component/PurpleTheme';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: PurpleTheme,
        options: { prefix: 'p', darkModeSelector: '.app-dark' },
      },
    }),
  ],
};
