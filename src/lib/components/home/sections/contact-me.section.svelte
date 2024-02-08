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
		<button on:click|preventDefault type="submit" class="submit-btn"
			>Send <svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				fill="#000000"
				height="800px"
				width="800px"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 495.003 495.003"
				xml:space="preserve"
			>
				<g id="XMLID_51_">
					<path
						id="XMLID_53_"
						d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616   l-67.6-32.22V456.687z"
					/>
					<path
						id="XMLID_52_"
						d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422   c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414   l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956   L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
					/>
				</g>
			</svg></button
		>
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
		display: flex;
		justify-content: center;
		align-items: center;
		gap: $spacing-s;

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
	svg {
		width: $icon-size-s;
		height: $icon-size-s;
		fill: white;
	}

	@media screen and (max-width: 768px) {
		.contact-form {
			grid-column: 2 / 8;
		}
		textarea {
			height: 100px;
		}
	}
</style>
