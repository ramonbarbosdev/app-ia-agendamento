import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideEnvironmentNgxMask } from 'ngx-mask';
// import VerdeAgro from './layout/component/VerdeAgro';


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
        preset: Aura,
        options: { prefix: 'p', darkModeSelector: '.app-dark' },
      },
    }),
  ],
};
