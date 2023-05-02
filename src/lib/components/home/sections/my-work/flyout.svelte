<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let show: boolean;
	export let imgs: string[];
	export let content: string;
	export let title: string;

	let imageIndex: number = 0;

	$: rightValue = show ? '0px' : '-200%';
	const dispatch = createEventDispatcher();
	function dispatchCloseEvent() {
		dispatch('close');
	}
	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			dispatchCloseEvent();
		}
		if (event.key === 'ArrowLeft') {
			handleSlideShowChange(-1);
		}
		if (event.key === 'ArrowRight') {
			handleSlideShowChange(1);
		}
	}
	function handleSlideShowChange(dir: 1 | -1 = 1) {
		imageIndex = imageIndex + dir;
		if (imageIndex < 0) {
			imageIndex = imgs.length - 1;
		}
		if (imageIndex > imgs.length - 1) {
			imageIndex = 0;
		}
	}
</script>

<svelte:window on:wheel={dispatchCloseEvent} on:keydown={handleWindowKeydown} />
<aside style:right={rightValue}>
	<div class="header">
		<button on:click={dispatchCloseEvent}>
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.3 5.70998C18.2075 5.61728 18.0976 5.54373 17.9766 5.49355C17.8556 5.44337 17.7259 5.41754 17.595 5.41754C17.464 5.41754 17.3343 5.44337 17.2134 5.49355C17.0924 5.54373 16.9825 5.61728 16.89 5.70998L12 10.59L7.10998 5.69998C7.0174 5.6074 6.90749 5.53396 6.78652 5.48385C6.66556 5.43375 6.53591 5.40796 6.40498 5.40796C6.27405 5.40796 6.1444 5.43375 6.02344 5.48385C5.90247 5.53396 5.79256 5.6074 5.69998 5.69998C5.6074 5.79256 5.53396 5.90247 5.48385 6.02344C5.43375 6.1444 5.40796 6.27405 5.40796 6.40498C5.40796 6.53591 5.43375 6.66556 5.48385 6.78652C5.53396 6.90749 5.6074 7.0174 5.69998 7.10998L10.59 12L5.69998 16.89C5.6074 16.9826 5.53396 17.0925 5.48385 17.2134C5.43375 17.3344 5.40796 17.464 5.40796 17.595C5.40796 17.7259 5.43375 17.8556 5.48385 17.9765C5.53396 18.0975 5.6074 18.2074 5.69998 18.3C5.79256 18.3926 5.90247 18.466 6.02344 18.5161C6.1444 18.5662 6.27405 18.592 6.40498 18.592C6.53591 18.592 6.66556 18.5662 6.78652 18.5161C6.90749 18.466 7.0174 18.3926 7.10998 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2134 18.5161C17.3344 18.5662 17.464 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.464 18.5662 17.3344 18.5161 17.2134C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.10998C18.68 6.72998 18.68 6.08998 18.3 5.70998Z"
				/>
			</svg>
		</button>
		<h2>{title}</h2>
	</div>
	<div class="slide-show-container">
		<div on:click={() => handleSlideShowChange(-1)} class="arrow arrow--left" />
		<div on:click={() => handleSlideShowChange(1)} class="arrow arrow--right" />
		{#each imgs as img, i}
			<img
				style:opacity={imageIndex === i ? 1 : 0}
				src={img}
				alt={`image number ${i} of the product`}
			/>
		{/each}
	</div>
	<p>
		{content}
	</p>
</aside>
<div style:display={show ? 'block' : 'none'} class="backdrop" />

<style lang="scss">
	@import '../../../../../sass/main.scss';

	aside {
		background: $color-bg-light;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
		height: 80%;
		width: 375px;
		position: fixed;
		top: 50%;
		right: -100%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		transition: right 0.2s ease-in-out;
		z-index: 1;
		padding: $spacing-s;
		border-radius: $border-radius-m 0 0 $border-radius-m;
		z-index: 101;
	}

	svg {
		fill: $color-text-on-bg-light;
		cursor: pointer;

		&:hover {
			fill: rgba($color-text-on-bg-light, 0.8);
		}
	}

	img {
		object-fit: contain;
		height: 300px;
		width: 100%;
		position: absolute;
		background-color: $color-bg-light;
		border-radius: $border-radius-s;
		transition: opacity 0.2s ease-in-out;
	}

	button {
		background: none;
		border: none;
		outline: none;
		width: min-content;
		display: flex;
		justify-content: center;
	}

	p {
		color: $color-text-on-bg-light;
		font-size: $font-size-b1;
		line-height: $line-height-large;
		padding: $spacing-s;
	}

	.slide-show-container {
		position: relative;
		height: 300px;
	}

	.arrow {
		display: block;
		width: 32px;
		height: 32px;
		position: absolute;
		right: $spacing-m;
		top: 50%;
		border: solid $color-bg-dark;
		border-width: 0 5px 5px 0;
		border-radius: $border-radius-s;
		display: inline-block;
		padding: 3px;
		z-index: 1;
		transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out;

		&--left {
			left: $spacing-m;
			transform: translateY(-50%) rotate(135deg);

			&:hover {
				transform: translateY(-50%) rotate(135deg) scale(1.2);
			}
		}

		&--right {
			right: $spacing-m;
			transform: translateY(-50%) rotate(-45deg);

			&:hover {
				transform: translateY(-50%) rotate(-45deg) scale(1.2);
			}
		}

		&:hover {
			border-color: rgba($color-bg-dark, 0.8);
			cursor: pointer;
		}
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: $spacing-s;

		h2 {
			color: $color-text-on-bg-light;
			font-size: $font-size-h3;
			letter-spacing: $letter-spacing-l;
			margin: 0 $spacing-s;
			font-weight: normal;
		}
	}

	.backdrop {
		top: 0;
		left: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 100;
	}
</style>
