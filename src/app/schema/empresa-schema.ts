import { z } from 'zod';

export const EmpresasSchema = z.object({
  cd_empresa: z.string('O Código é obrigatório').min(1, 'O Código é obrigatório'),
  nm_empresa: z.string('O Nome é obrigatório').min(1, 'O Nome é obrigatório'),
});

export const EmpresaSchema = z.array(EmpresasSchema);
