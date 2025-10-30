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

  const userRole = FormatarNomeRole(user.role).toLowerCase();

  const roles = rolesPermitidos?.map((r) => r.toLowerCase()) ?? ['admin', 'dev'];

  const permitido = roles.includes(userRole);

  if (!permitido) {
    router.navigate(['/auth/access']);
    return false;
  }

  return true;
};
