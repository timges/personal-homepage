import { emailSchema } from '$lib/util/email-schema.js';
import { superValidate } from 'sveltekit-superforms/server';
import Email from '$lib/components/home/sections/contact/email.svelte';
import sendgrid from '@sendgrid/mail';
import { render } from 'svelte-email/render';
import { fail } from '@sveltejs/kit';
import type { SuperValidated } from 'sveltekit-superforms';
import { SENDGRID_API_KEY, RECAPTCHA_SECRET_KEY } from '$env/static/private';

sendgrid.setApiKey(SENDGRID_API_KEY);

async function sendEmail(form: SuperValidated<typeof emailSchema>) {
	const emailTemplate = render({
		template: Email,
		props: form.data
	});
	const options: sendgrid.MailDataRequired = {
		from: {
			name: 'Personal Website Contact Form',
			email: 'me@tim-gesemann.dev'
		},
		to: 'gmann.tim@gmail.com',
		subject: 'New Contact Form Submission',
		html: emailTemplate,

	};
	await sendgrid.send(options);
}

async function validateReCaptcha(token: string) {
	const result = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
		{
			method: 'POST'
		}
	);
	const data = await result.json();
	return data.success && data.score > 0.5;
}

export async function load() {
	const form = await superValidate(emailSchema);
	return { form };
}

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
			await sendEmail(form);
			return { form };
		} catch (error) {
			console.error(error);
			return fail(500, { message: error });
		}
	}
};
