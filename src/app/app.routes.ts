import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { authGuard } from './auth/auth.guard';
import { HomeAdmin } from './pages/admin/home-admin/home-admin';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('../app/pages/auth/auth.routes') },

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
