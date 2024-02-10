import { z } from 'zod';

export const emailSchema = z.object({
	name: z.string().min(1).max(50),
	email: z.string().email(),
	subject: z.string().min(1).max(50),
	message: z.string().min(1).max(500)
});
