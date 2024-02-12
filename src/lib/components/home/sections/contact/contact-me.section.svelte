<script lang="ts">
	import { emailSchema } from '$lib/util/email-schema';
	import { fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import FormField from './form-field.svelte';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { tick } from 'svelte';

	export let data: { form: SuperValidated<any> };

	let formRef: HTMLFormElement;

	const { form, enhance, errors } = superForm(data.form, {
		validationMethod: 'auto',
		validators: emailSchema,
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
			grecaptcha
				.execute('6LdrcHApAAAAAL_j-HWDi5isOi1zUb-X85HbTnoB', { action: 'submit' })
				.then(async function (token: string) {
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
		<input type="hidden" name="token" bind:value={$form.token} />
		<button
			type="submit"
			style:background-color={submissionSuccessful ? 'green' : undefined}
			on:click|preventDefault={onSubmitButtonClick}
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
			<a href="https://policies.google.com/privacy">Privacy Policy</a> and
			<a href="https://policies.google.com/terms">Terms of Service</a> apply.
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
		gap: $spacing-l;
		background-color: $color-bg-dark;
		padding: $spacing-xl;
		z-index: 100;
		border-radius: $border-radius-s;
	}
	section {
		max-width: 100%;
		background-color: $color-bg-light;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: $font-size-h2 repeat(7, 1fr);
		gap: $spacing-l;
		position: relative;
		padding: $spacing-xxl 0;
	}

	h2 {
		grid-column: 2 / span all;
		line-height: $line-height-large;
	}

	button {
		position: relative;
		background-color: $color-primary;
		color: $color-text-on-primary;
		padding: $spacing-m;
		border: none;
		font-size: $font-size-b1;
		cursor: pointer;
		min-width: 140px;
		max-width: 180px;
		align-self: flex-end;
		border-radius: $border-radius-s;

		&:hover {
			background-color: $color-primary-hover;
		}
	}

	.button-content {
		height: $icon-size-s;
		widows: 100%;
		display: flex;
		gap: $spacing-s;
		justify-content: center;
		align-items: center;

		div {
			display: flex;
			align-items: center;
			gap: $spacing-m;
		}
	}
	svg {
		width: $icon-size-s;
		height: $icon-size-s;
		fill: $color-text-on-primary;
	}

	p {
		grid-column: 2 / 4;
		grid-row: 4 / span all;
		font-size: $font-size-b1;
		line-height: $line-height-large;
	}
	.re-captcha-disclaimer {
		font-size: $font-size-small;
		color: $color-light-fade;
		a {
			color: $color-primary;
		}
		min-width: 80%;
	}

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
		h2 {
			margin-left: $spacing-l;
		}
		.contact-form {
			background-color: transparent;
			order: 3;
			padding: $spacing-l;
		}
		textarea {
			height: 100px;
		}
		input,
		textarea {
			padding: $spacing-m;
		}
		p {
			order: 2;
			padding: $spacing-l;
		}
	}
</style>
