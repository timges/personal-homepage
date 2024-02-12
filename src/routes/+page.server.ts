import { emailSchema } from '$lib/util/email-schema.js';
import { superValidate } from 'sveltekit-superforms/server';
import Email from '$lib/components/home/sections/contact/email.svelte';
import sendgrid from '@sendgrid/mail';
import { render } from 'svelte-email/render';
import { fail } from '@sveltejs/kit';

sendgrid.setApiKey(String(process.env.SENDGRID_API_KEY));

export async function load() {
	const form = await superValidate(emailSchema);

	return {
		form
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: { request: Request }) => {
		try {
			const form = await superValidate(request, emailSchema);
			if (!form.valid) {
				return fail(400, { form });
			}
			const isReCaptchaValid = await validateReCaptcha(form.data.token);
			if (!isReCaptchaValid) {
				return fail(401, { message: 'reCaptcha failed' });
			}
			const emailTemplate = render({
				template: Email,
				props: form.data
			});
			const options = {
				from: 'tim@gesemann.dev',
				to: 'gmann.tim@gmail.com',
				subject: 'New Contact Form Submission',
				html: emailTemplate
			};
			sendgrid.send(options);

			return { form };
		} catch (error) {
			console.error(error);
			return fail(500, { message: error });
		}
	}
};
async function validateReCaptcha(token: string) {
	try {
		const result = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
			{
				method: 'POST'
			}
		);
		const data = await result.json();
		console.log(data);
		return data.success && data.score > 0.5;
	} catch (error) {
		throw new Error('Failed to validate reCaptcha -- ' + error);
	}
}
