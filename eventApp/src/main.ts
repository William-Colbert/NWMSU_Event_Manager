import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoginPageComponent } from './app/login-page.component';
import { Routes, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(LoginPageComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(LoginPageComponent, {
  providers: [
    provideRouter(routes)
  ]
});
