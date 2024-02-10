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
		const form = await superValidate(request, emailSchema);
		if (!form.valid) {
			return fail(400, { form });
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
	}
};
