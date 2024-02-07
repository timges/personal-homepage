<section id="contact-me">
	<h2>CONTACT ME</h2>
	<aside />
	<form class="contact-form">
		<label for="name">Name</label>
		<input name="name" type="text" placeholder="Your Name" />
		<label for="e-mail">E-Mail</label>
		<input name="e-mail" type="text" placeholder="Your e-mail address" />
		<label for="subject">Subejct</label>
		<input name="subject" type="text" placeholder="Your subject" />
		<label for="message">Message</label>
		<textarea name="message" placeholder="Your message" />
		<button on:click|preventDefault type="submit" class="submit-btn">Send</button>
	</form>
</section>

<style lang="scss">
	@import '../../../../sass/main.scss';

	section {
		max-width: 100%;
		background-color: $color-bg-light;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: $font-size-h2 repeat(7, 1fr);
		row-gap: $spacing-l;
		position: relative;
		padding: $spacing-xxl 0;
	}

	h2 {
		grid-column: 2 / span all;
		line-height: $line-height-large;
	}

	input,
	textarea {
		background-color: $color-bg-dark;
		color: $color-primary;
		border: 1px solid $color-primary;
		padding: $spacing-m;
		font-size: $font-size-b2;
		font-family: Roboto, sans-serif;

		&:focus {
			outline: 1px solid $color-primary;
		}

		&:not(:last-child) {
			margin-bottom: $spacing-l;
		}
	}

	textarea {
		height: 200px;
		resize: none;
	}

	label {
		font-size: $font-size-b1;
		margin-bottom: $spacing-s;
	}

	button {
		background-color: $color-primary;
		color: $color-text-on-primary;
		border: 1px solid $color-primary;
		padding: $spacing-m;
		font-size: $font-size-b1;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		min-width: 140px;
		max-width: 180px;
		align-self: flex-end;
		border-radius: $border-radius-s;

		&:hover {
			background-color: $color-primary-hover;
		}
	}

	.contact-form {
		grid-column: 4 / 8;
		grid-row: 2 / span all;
		display: flex;
		flex-direction: column;
		background-color: $color-bg-dark;
		padding: $spacing-xl;
		z-index: 100;
		border-radius: $border-radius-s;
	}
	
	@media screen and (max-width: 768px) {
		.contact-form {
			grid-column: 2 / 8;
		}
	}
</style>
