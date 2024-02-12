<script lang="ts">
	let width: number = 0;

	function handleCtaClick() {
		document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:window bind:innerWidth={width} />
<section>
	<div class="cta-container">
		<p class="cta-greeting cta-greeting--hi">Hi!<span style:font-size={'3rem'}>✌🏼</span></p>
		<p class="cta-greeting cta-greeting--name-paragraph">my name is</p>
		<h1>Tim Gesemann</h1>
		<p class="cta-greeting">I turn coffee into code.</p>
		<p class="cta-introduction">
			I'm a Software Engineer with years of experience in developing and designing enterprise
			software solutions
		</p>
		<button on:click={handleCtaClick} class="cta-button"><p>GET IN TOUCH</p></button>
	</div>
	<img src={'/tim-2.png'} alt="Tim Gesemann profile" />
</section>

<style lang="scss">
	@import '../../../../sass/main.scss';
	.cta-button {
		position: relative;
		background-color: $color-primary;
		color: $color-text-on-primary;
		padding: $spacing-m $spacing-xxl;
		border: none;
		border-radius: $border-radius-s;
		font-size: $font-size-b1;
		font-weight: bold;
		cursor: pointer;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: $color-secondary;
			z-index: 1;
			border-radius: $border-radius-s;
			transition: all 0.2s ease-in-out;
		}

		p {
			position: relative;
			margin: 0 !important;
			z-index: 2;
		}

		&:hover::after {
			width: 100%;
		}
	}
	.cta-container {
		position: relative;
		grid-column: 3 / 6;
		grid-row: 3 / 9;

		p:first-child {
			margin: 0 0 $spacing-l 0;
		}
		p:nth-child(2) {
			display: inline-block;
		}
	}

	.cta-greeting {
		font-size: $font-size-h3;
		color: $color-secondary;

		&--name-paragraph {
			white-space: nowrap;
		}
		&--hi {
			font-size: $font-size-h1;
		}
	}

	.cta-introduction {
		max-width: 350px;
		margin: $spacing-xl 0;
		color: $color-primary;
		font-weight: 100;
	}

	section {
		width: 100%;
		background-color: $color-bg-light;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 1fr);
		overflow-x: hidden;
	}

	img {
		position: relative;
		width: 45vh;
		grid-column: 5 / 9;
		grid-row: 2/9;
		justify-content: end;
	}

	h1 {
		display: inline-block;
		font-size: $font-size-h2;
		color: $color-primary;
		font-weight: bold;
		padding: $spacing-s 0;
	}
	@media screen and (max-width: 1080px) {
		img {
			width: 400px;
			grid-column: 5 / 9;
			grid-row: 2/9;
		}

		.cta-container {
			grid-column: 2 / 5;
			grid-row: 3 / 9;
		}
	}

	@media screen and (max-width: 768px) {
		.cta-container {
			margin-top: $spacing-l;
			display: flex;
			flex-direction: column;
		}

		section {
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			padding: $spacing-l;
		}

		img {
			display: none;
		}

		@media screen and (max-width: 480px) {
			section {
				padding: $spacing-m;
			}

			.cta-container {
				margin-top: $spacing-m;
			}

			.cta-greeting {
				font-size: $font-size-b1;

				&--hi {
					font-size: $font-size-h2;
				}
			}
		}
	}
</style>
