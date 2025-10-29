import { z } from 'zod';

export const LoginsSchema = z.object({
  login: z.string('O Login é obrigatório').min(1, 'O Login é obrigatório'),
  // tp_permissao: z.preprocess((val) => {
  //   if (typeof val === 'string') {
  //     const num = Number(val);
  //     return isNaN(num) ? null : num;
  //   }
  //   if (typeof val === 'number') return val;
  //   return null;
  // }, z.number('A Permissão é obrigatório').min(1, 'A Permissão é obrigatório')),
  senha: z.string('A Senha é obrigatório').min(1, 'A Senha é obrigatório'),
});

export const LoginSchema = z.array(LoginsSchema);
