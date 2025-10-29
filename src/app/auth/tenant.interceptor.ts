import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const TenantInterceptor: HttpInterceptorFn = (req, next) => {

    const auth = inject(AuthService);
   const user = auth.getUserSubbject();
   const idTenant = user?.idTenant;

   console.log(idTenant);

    // if (token) {
    //   const cloned = req.clone({
    //     setHeaders: {
    //       Authorization: `${token}`,
    //     },
    //   });
    //   return next(cloned);
    // }

    return next(req);
};
