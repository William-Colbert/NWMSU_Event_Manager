import { bootstrapApplication } from '@angular/platform-browser';
import { LoginPageComponent } from './app/login-page.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(LoginPageComponent, config);

export default bootstrap;
