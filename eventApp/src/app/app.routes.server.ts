import { RenderMode, ServerRoute } from '@angular/ssr';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routers: Routes = [
  {path: 'admin', component: AdminComponent}
];

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
