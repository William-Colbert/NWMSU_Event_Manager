import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginPageComponent } from './login-page.component';

export const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'admin', component: AdminComponent}
];
