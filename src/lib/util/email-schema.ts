import { z } from 'zod';

export const emailSchema = z.object({
	name: z
		.string()
		.min(1, 'Uh-oh! This field cannot be left blank.')
		.max(50, 'You exceeded the maximum length of 50 characters!'),
	email: z
		.string()
		.min(1, 'Uh-oh! This field cannot be left blank.')
		.max(50, 'You exceeded the maximum length of 50 characters!')
		.email('The email address you provided is invalid!'),
	subject: z
		.string()
		.min(1, 'Uh-oh! This field cannot be left blank.')
		.max(50, 'You exceeded the maximum length of 50 characters!'),
	message: z
		.string()
		.min(1, 'Uh-oh! This field cannot be left blank.')
		.max(500, 'You exceeded the maximum length of 500 characters!'),
	token: z.string()
});
