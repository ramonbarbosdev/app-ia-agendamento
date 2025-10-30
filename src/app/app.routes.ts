import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { authGuard } from './auth/auth.guard';
import { HomeAdmin } from './pages/admin/home-admin/home-admin';
import { HomeDev } from './pages/dev/home-dev/home-dev';
import { HomeClient } from './pages/client/home-client/home-client';
import { Usuariolist } from './pages/dev/usuario/usuariolist/usuariolist';
import { Rolelist } from './pages/dev/role/rolelist/rolelist';

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
      { path: 'usuario', component: Usuariolist },
      { path: 'role', component: Rolelist },
    ],
  },
  {
    path: 'admin',
    component: AppLayout,
    canActivateChild: [authGuard],
    data: { roles: ['admin', 'dev'] },
    children: [{ path: 'home', component: HomeAdmin }],
  },
  {
    path: 'client',
    component: AppLayout,
    canActivateChild: [authGuard],
    data: { roles: ['admin', 'dev', 'client'] },
    children: [{ path: 'home', component: HomeClient }],
  },
];
