<script lang="ts">
	import { contactFormSchema } from '$lib/util/contact-form-schema';
	import { fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import FormField from './form-field.svelte';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { tick } from 'svelte';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';
	import { cookieStatus } from '$lib/store/cookie-store';

	export let data: { form: SuperValidated<any> };

	let formRef: HTMLFormElement;

	$: $form.consent ? ($cookieStatus = 'accepted') : null;
	const { form, enhance, errors } = superForm(data.form, {
		validationMethod: 'auto',
		validators: contactFormSchema,
		onResult: ({ result }) => {
			console.log(result.status);
			if (result.status === 200) {
				submissionSuccessful = true;
			}
			if (result.status === 401) {
				console.log('invalid captcha');
			}
			if (result.status === 500) {
				console.log('server error');
			}
		},
		resetForm: true
	});
	let submissionSuccessful = false;
	$: submissionSuccessful && setTimeout(() => (submissionSuccessful = false), 1000);

	function onSubmitButtonClick() {
		// @ts-ignore
		grecaptcha.ready(function () {
			// @ts-ignore
			grecaptcha.execute(PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' }).then(async function (
				token: string
			) {
				$form.token = token;
				await tick();
				formRef.requestSubmit();
			});
		});
	}
</script>

<section id="contact-me">
	<h2>CONTACT ME</h2>
	<aside />
	<form method="POST" class="contact-form" use:enhance bind:this={formRef} on:submit|preventDefault>
		<FormField {form} {errors} name="name" placeholder="name" type="text" maxLength={50} />
		<FormField
			{form}
			{errors}
			name="email"
			placeholder="e-mail address"
			type="text"
			maxLength={50}
		/>
		<FormField {form} {errors} name="subject" placeholder="subject" type="text" maxLength={50} />
		<FormField
			{form}
			{errors}
			name="message"
			placeholder="message"
			type="textarea"
			maxLength={500}
		/>
		<input type="hidden" name="token" title="re-captcha-token" bind:value={$form.token} />
		<div class="consent-input-container">
			<label for="consent">
				I agree to the use of cookies and the processing of my entered data as described in the
				<a target="_blank" href="/cookie-policy">Cookie Policy</a>
				and
				<a href="/privacy-policy">Privacy Policy</a>
				.
			</label>
			<input type="checkbox" name="consent" title="consent" bind:checked={$form.consent} />
		</div>
		<button
			type="submit"
			style:background-color={submissionSuccessful ? 'green' : undefined}
			on:click|preventDefault={onSubmitButtonClick}
			disabled={!$form.consent}
		>
			<div class="button-content">
				{#if submissionSuccessful}
					<svg
						in:fly
						xmlns="http://www.w3.org/2000/svg"
						xml:space="preserve"
						viewBox="0 0 469.184 469.185"
					>
						<path
							d="m462.5 96.193-21.726-21.726c-8.951-8.95-23.562-8.95-32.59 0L180.368 302.361l-119.34-119.34c-8.95-8.951-23.562-8.951-32.589 0L6.712 204.747c-8.95 8.951-8.95 23.562 0 32.589L163.997 394.62c4.514 4.514 10.327 6.809 16.218 6.809s11.781-2.295 16.219-6.809L462.27 128.783c9.18-9.103 9.18-23.638.23-32.59z"
						/>
					</svg>
				{:else}
					<div in:fly>
						Send <svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 495.003 495.003"
							xml:space="preserve"
						>
							<path
								d="M164.711 456.687a8.007 8.007 0 0 0 4.266 7.072 7.992 7.992 0 0 0 8.245-.468l55.09-37.616-67.6-32.22v63.232zM492.431 32.443a8.024 8.024 0 0 0-5.44-2.125 7.89 7.89 0 0 0-3.5.816L7.905 264.422a14.154 14.154 0 0 0 .153 25.472L133.4 349.618l250.62-205.99-219.565 220.786 156.145 74.4a14.115 14.115 0 0 0 6.084 1.376c1.768 0 3.519-.322 5.186-.977a14.188 14.188 0 0 0 7.97-7.956l154.596-390a7.968 7.968 0 0 0-2.005-8.814z"
							/>
						</svg>
					</div>
				{/if}
			</div>
		</button>
		<div class="re-captcha-disclaimer">
			This site is protected by reCAPTCHA and the Google
			<a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and
			<a target="_blank" href="https://policies.google.com/terms">Terms of Service</a> apply.
		</div>
	</form>
	<p>
		Don't hesitate to reach out with any questions or ideas. I'm here to listen, offer insights, and
		have enriching discussions. Your message could spark something wonderful—let's start a dialogue!
	</p>
</section>

<style lang="scss">
	@import '../../../../../sass/main.scss';
	.contact-form {
		grid-column: 4 / 8;
		grid-row: 2 / span all;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-l);
		background-color: var(--color-bg-light);
		padding: var(--spacing-xl);
		z-index: 100;
		border-radius: var(--border-radius-s);
	}
	section {
		max-width: 100%;
		background-color: var(--color-bg-dark);
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: var(--font-size-h2) repeat(7, 1fr);
		gap: var(--spacing-l);
		position: relative;
		padding: var(--spacing-xxl) 0;
	}

	h2 {
		grid-column: 2 / span all;
		line-height: var(--line-height-large);
	}

	button {
		position: relative;
		background-color: var(--color-primary);
		color: var(--color-text-on-primary);
		padding: var(--spacing-m);
		border: none;
		font-size: var(--font-size-b1);
		cursor: pointer;
		min-width: 140px;
		max-width: 180px;
		align-self: flex-end;
		border-radius: var(--border-radius-s);

		&:hover:not(:disabled) {
			background-color: var(--color-primary-hover);
		}
		&:disabled {
			background-color: var(--color-light-fade);
			cursor: not-allowed;
		}
	}

	.button-content {
		height: var(--icon-size-s);
		widows: 100%;
		display: flex;
		gap: var(--spacing-s);
		justify-content: center;
		align-items: center;

		div {
			display: flex;
			align-items: center;
			gap: var(--spacing-m);
		}
	}
	svg {
		width: var(--icon-size-s);
		height: var(--icon-size-s);
		fill: var(--color-text-on-primary);
	}

	p {
		grid-column: 2 / 4;
		grid-row: 4 / span all;
		font-size: var(--font-size-b1);
		line-height: var(--line-height-large);
	}
	.re-captcha-disclaimer {
		font-size: var(--font-size-small);
		color: var(--color-light-fade);
		a {
			color: var(--color-primary);
		}
		min-width: 80%;
	}

	.consent-input-container {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		gap: var(--spacing-m);
		label {
			font-size: var(--font-size-small);
			color: var(--color-light-fade);
		}
		input[type='checkbox'] {
			all: unset;
			&::before {
				content: '';
				cursor: pointer;
				display: block;
				width: 24px;
				height: 24px;
				border: 1px solid var(--color-light-fade);
				border-radius: var(--border-radius-s);
				background-color: var(--color-bg-light);
				transition: background-color 0.1s ease-in-out;
			}
			&:checked::before {
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--color-text-on-primary);
				background-image: url('/checkmark.svg');
				background-size: 60%;
				background-repeat: no-repeat;
				background-position: center;
				background-color: var(--color-primary);
			}
		}
	}

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
		h2 {
			margin-left: var(--spacing-l);
		}
		.contact-form {
			background-color: transparent;
			order: 3;
			padding: var(--spacing-l);
		}
		textarea {
			height: 100px;
		}
		input,
		textarea {
			padding: var(--spacing-m);
		}
		p {
			order: 2;
			padding: var(--spacing-l);
		}
	}
</style>
