import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes,withComponentInputBinding(),withPreloading(PreloadAllModules)),
    provideHttpClient(), provideAnimationsAsync()
  ]
};
