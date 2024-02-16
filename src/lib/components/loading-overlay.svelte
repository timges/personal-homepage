<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		// @ts-ignore
		clearInterval(window['loadingInterval']);
	});
</script>

<div class="loading-overlay">
	<h1>Loading.. Please wait</h1>
	<div class="inner-tv">
		<div class="tv-sreen">
			<div class="loading-disc">DVD</div>
		</div>
	</div>
	<script>
		let posX = 0;
		let posY = 0;
		let xVelocity = 3;
		let yVelocity = 3;
		window['loadingInterval'] = setInterval(() => {
			const disc = document.querySelector('.loading-disc');
			const tv = document.querySelector('.tv-sreen');
			posX += xVelocity;
			posY += yVelocity;
			disc.style.top = `${posY}px`;
			disc.style.left = `${posX}px`;

			// the disc should bounce off the border of the tv, which is the container
			if (posX + disc.clientWidth > tv.clientWidth || posX < 0) {
				xVelocity *= -1;
				disc.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
			}
			if (posY + disc.clientHeight + 60 > tv.clientHeight || posY < 0) {
				yVelocity *= -1;
				disc.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
			}
		}, 1000 / 60); // Run 60 times per second
	</script>
</div>

<style lang="scss">
	@import '../../sass/main.scss';
	:global(body) {
		overflow: hidden;
	}
	h1 {
		color: black;
		position: absolute;
		top: var(--spacing-page-inset);
		font-size: var(--font-size-h2);
	}
	.loading-overlay {
		position: fixed;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-bg-dark);
		z-index: 400;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.loading-disc {
		position: absolute;
		font-size: var(--font-size-h1);
		color: var(--color-primary);

		&::after {
			content: '';
			position: absolute;
			display: block;
			top: 70%;
			width: 100px;
			height: 100px;
			clip-path: ellipse(25% 40% at 50% 50%);
			left: 50%;
			transform: translateX(-50%) rotate(70deg);
			background-color: currentColor;
			background: radial-gradient(circle at center, transparent 7%, currentColor 8.5%);
		}
	}
	.inner-tv {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 780px;
		height: 480px;
		border-top: 3px solid #888;
		padding: 16px 16px 24px 16px;
		border-radius: 10px;
		border-bottom-left-radius: 50% 2%;
		border-bottom-right-radius: 50% 2%;
		transition: margin-right 1s;
		background-color: black;

		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 3%;
			left: 36%;
			height: 0.5%;
			width: 28%;
			border-radius: 50%;
			box-shadow: 0 0 3px 0 white;
		}
	}

	.tv-sreen {
		position: relative;
		background-color: #999;
		background-size: cover;
		background-position: top center;
		height: 100%;
		padding-bottom: 56.25%;
		position: relative;
		overflow: hidden;
	}

	@media (max-width: 768px) {
		.inner-tv {
			width: 70%;
			height: 70%;
		}
	}
	@media (max-width: 480px) {
		h1 {
			font-size: var(--font-size-h3);
		}
	}
</style>
