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
			I'm a Software Engineer from Germany with years of experience in designing and developing
			enterprise software solutions
		</p>
		<button on:click={handleCtaClick} class="cta-button"><p>GET IN TOUCH</p></button>
	</div>
	<img src={'/me.png'} alt="Tim Gesemann profile" />
</section>

<style lang="scss">
	@import '../../../../sass/main';
	.cta-button {
		position: relative;
		background-color: var(--color-primary);
		color: var(--color-text-on-primary);
		padding: var(--spacing-m) var(--spacing-xxl);
		border: none;
		border-radius: var(--border-radius-s);
		font-size: var(--font-size-b1);
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		max-width: 400px;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: var(--color-secondary);
			z-index: 1;
			border-radius: var(--border-radius-s);
			transition: all 0.2s ease-in-out;
		}

		p {
			position: relative;
			margin: 0 !important;
			z-index: 2;
		}
		&:hover {
			transform: scale(1.01);
		}

		&:hover::after {
			width: 100%;
			transform: scale(1.01);
		}
	}
	.cta-container {
		position: relative;
		grid-column: 3 / 6;
		grid-row: 3 / 9;

		p:first-child {
			margin: 0 0 var(--spacing-l) 0;
		}
		p:nth-child(2) {
			display: inline-block;
		}
	}

	.cta-greeting {
		font-size: var(--font-size-h3);
		color: var(--color-secondary);

		&--name-paragraph {
			white-space: nowrap;
		}
		&--hi {
			font-size: var(--font-size-h1);
		}
	}

	.cta-introduction {
		max-width: 300px;
		margin: var(--spacing-xl) 0;
		color: var(--color-primary);
		font-weight: 100;
	}

	section {
		width: 100%;
		background-color: var(--color-bg-dark);
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
		font-size: var(--font-size-h2);
		color: var(--color-primary);
		font-weight: bold;
		padding: var(--spacing-s) 0;
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
			margin-top: var(--spacing-l);
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.cta-introduction {
			max-width: 100%;
		}
		button {
			align-self: center;
			width: 100%;
		}

		section {
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			padding: var(--spacing-l);
		}

		img {
			display: none;
		}

		@media screen and (max-width: 480px) {
			section {
				padding: var(--spacing-m);
			}

			.cta-container {
				margin-top: var(--spacing-m);
			}

			.cta-greeting {
				font-size: var(--font-size-b1);

				&--hi {
					font-size: var(--font-size-h2);
				}
			}
		}
	}
	@media screen and (min-width: 1620px) {
		.cta-introduction {
			max-width: 450px;
		}
	}
</style>
