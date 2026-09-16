import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

/**
 * Single-page landing: no routing needed (anchor-based navigation).
 * Provide error listeners for sensible global error handling.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};