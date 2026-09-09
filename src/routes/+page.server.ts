import { RECAPTCHA_SECRET_KEY, SENDGRID_API_KEY } from '$env/static/private';
import AdminEmail from '$lib/components/home/sections/contact/admin-email.svelte';
import UserEmail from '$lib/components/home/sections/contact/user-email.svelte';
import { contactFormSchema } from '$lib/util/contact-form-schema.js';
import sendgrid from '@sendgrid/mail';
import { fail } from '@sveltejs/kit';
import { htmlRender } from '@sveltelaunch/svelte-5-email';
import type { SuperValidated } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms/server';

if (!SENDGRID_API_KEY || !SENDGRID_API_KEY.startsWith('SG.')) {
	throw new Error(
		'Missing or invalid SENDGRID_API_KEY (expected to start with "SG."). Check .env.local / hosting env vars. See .env.example.'
	);
}

if (!RECAPTCHA_SECRET_KEY) {
	throw new Error('Missing RECAPTCHA_SECRET_KEY. Check .env.local / hosting env vars.');
}

sendgrid.setApiKey(SENDGRID_API_KEY);

async function sendAdminEmail(form: SuperValidated<any>) {
	const emailTemplate = htmlRender({
		template: AdminEmail,
		options: {},
		props: form.data
	});
	const options: sendgrid.MailDataRequired = {
		from: {
			name: 'Personal Website Contact Form',
			email: 'me@tim-gesemann.dev'
		},
		to: 'gmann.tim@gmail.com',
		subject: 'New Contact Form Submission',
		html: emailTemplate
	};
	await sendgrid.send(options);
}

async function sendUserEmail(form: SuperValidated<any>) {
	const emailTemplate = htmlRender({
		template: UserEmail,
		options: {},
		props: {
			name: form.data.name
		}
	});
	const options: sendgrid.MailDataRequired = {
		from: {
			name: 'Tim Gesemann',
			email: 'me@tim-gesemann.dev'
		},
		to: form.data.email,
		subject: 'Thank you for reaching out!',
		html: emailTemplate
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
	const form = await superValidate(zod(contactFormSchema));
	return { form };
}

export const actions = {
	default: async ({ request }: { request: Request }) => {
		try {
			const form = await superValidate(request, zod(contactFormSchema));
			if (!form.valid) {
				return fail(400, { form });
			}
			const isReCaptchaValid = await validateReCaptcha(form.data.token);
			if (!isReCaptchaValid) {
				return fail(401, { message: 'reCaptcha failed' });
			}
			await sendAdminEmail(form);
			//No await, cause we don't want to block the user if the user email fails
			void sendUserEmail(form).catch((error) => console.error('Failed to send user email:', error));
			return { form };
		} catch (error) {
			console.error(error);
			return fail(500, { message: error });
		}
	}
};
