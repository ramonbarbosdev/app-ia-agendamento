// ajuste o caminho conforme sua pasta

import { TipoRole } from '../enum/TipoRole'; // sem .ts


export function FormatarNomeRole(valor: any): any {
  if (valor && valor === TipoRole.ROLE_ADMIN) {
    return 'admin';
  }
  return '';
}

export function FormatarNomeRoleComponente(valor: any): any {
  if (valor && valor === TipoRole.ROLE_ADMIN) {
    return 'Administrador';
  }
  if (valor && valor === TipoRole.ROLE_GESTOR) {
    return 'Gestor';
  }
  if (valor && valor === TipoRole.ROLE_USER) {
    return 'Usuario';
  }
  return '';
}
