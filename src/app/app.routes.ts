import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { authGuard } from './auth/auth.guard';
import { HomeAdmin } from './pages/admin/home-admin/home-admin';
import { HomeDev } from './pages/dev/home-dev/home-dev';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('../app/pages/auth/auth.routes') },

  {
    path: 'dev',
    component: AppLayout,
    canActivateChild: [authGuard],
    data: { roles: ['dev'] },
    children: [
      { path: 'home', component: HomeDev },
    
    ],
  },
  {
    path: 'admin',
    component: AppLayout,
    canActivateChild: [authGuard],
    data: { roles: ['admin'] },
    children: [
      { path: 'home', component: HomeAdmin },
    
    ],
  },
];
