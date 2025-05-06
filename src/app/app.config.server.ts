import { mergeApplicationConfig, ApplicationConfig, APP_ID } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), { provide: APP_ID, useValue: 'serverApp' }],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
