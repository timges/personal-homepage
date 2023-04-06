<script lang="ts">
	let width: number = 0;
</script>

<svelte:window bind:innerWidth={width} />
<section>
	<div class="cta-container">
		<p class="cta-greeting">Hi there,</p>
		<p class="cta-greeting cta-greeting--name-paragraph">my name is <span><h1>Tim Gesemann</h1></span>.</p>
		<p class="cta-greeting">I like to write code.</p>
		<p class="cta-introduction">
			I'm a Software Engineer with years of experience in developing and designing enterprise
			software applications
		</p>
		<button class="cta-button">GET IN TOUCH</button>
	</div>
	<img src={width > 768 ? '/tim.png' : '/tim-cut.png'} alt="profile pcicture" />
</section>

<style lang="scss">
	@import '../../../../sass/main.scss';

	section {
		width: 100%;
		background-color: $color-bg-light;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 1fr);
	}

	img {
		width: 400px;
		grid-column: 5 / 9;
		grid-row: 2/9;
		justify-content: end;
	}

	h1 {
		display: inline-block;
		font-size: $font-size-h2;
		color: $color-primary;
		font-weight: bold;
	}

	.cta-container {
		grid-column: 3 / 6;
		grid-row: 3 / 9;

		p:first-child {
			margin: 0 0 $spacing-l 0;
		}
		p:last-of-type {
			margin: $spacing-xl 0;
			color: rgba($color-primary, 0.3);
		}
	}

	.cta-greeting {
		font-size: $font-size-h3;
		color: $color-secondary;

		&--name-paragraph {
			white-space: nowrap;
		}
	}

	.cta-introduction {
		max-width: 350px;
	}

	.cta-button {
		background-color: transparent;
		color: $color-primary;
		border: 1px solid $color-primary;
		padding: $spacing-m $spacing-xxl;
		border-radius: $border-radius-s;
		font-size: $font-size-b1;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: $color-primary;
			color: $color-text-on-primary;
		}
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
			margin-top: $spacing-xxl;
			display: flex;
			flex-direction: column;
		}

		section {
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			padding: $spacing-xxl;
		}

		img {
			width: 200px;
			height: 200px;
			border-radius: $border-radius-circle;
		}

	@media screen and (max-width: 480px) {
		section {
			padding: $spacing-m;
		}
		
		img {
			width: 150px;
			height: 150px;
		}	
		.cta-container {
			margin-top: $spacing-m;
		}
		
		.cta-greeting {
			font-size: $font-size-b1;

			h1 {
				font-size: $font-size-h3;
			}
		}

		.cta-introduction {
			max-width: 250px;
		}
	}
	}
</style>
