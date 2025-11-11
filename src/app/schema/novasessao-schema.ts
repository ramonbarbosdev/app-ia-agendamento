import { z } from 'zod';

export const NovasSessaoSchema = z.object({
  nomeSessao: z.string('O Nome é obrigatório').min(1, 'O Nome é obrigatório'),
});

export const NovaSessaoSchema = z.array(NovasSessaoSchema);
