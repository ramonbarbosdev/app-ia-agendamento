import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormatarNomeRole } from '../utils/FormatarNomeRole';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  const rolesPermitidos = route.parent?.data?.['roles'] as string[] | undefined;
  const user = auth.getUserSubbject();

  if (!user?.login) {
    router.navigate(['/auth/access']);
    return false;
  }

  const isAdminRoute = rolesPermitidos?.includes('admin');

  if (isAdminRoute && FormatarNomeRole(user.role) !== 'admin') {
    router.navigate(['/auth/access']);
    return false;
  }
  return true;
};
