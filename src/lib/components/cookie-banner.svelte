<script lang="ts">
	import { cookieStatus } from '$lib/store/cookie-store';
	import { onMount } from 'svelte';
	import { bounceIn } from 'svelte/easing';
	import { slide, type SlideParams } from 'svelte/transition';

	const baseSlide = {
		duration: 300,
		easning: bounceIn
	} as SlideParams;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
	function handleCookieConsent() {
		mounted = false;
		setTimeout(() => {
			$cookieStatus = 'accepted';
		}, 500);
	}
	function handleCookieDeny() {
		mounted = false;
		setTimeout(() => {
			$cookieStatus = 'declined';
		}, 500);
	}
</script>

{#if mounted}
	<aside in:slide={{ ...baseSlide, delay: 1500 }} out:slide={baseSlide}>
		<p>🍪 Cookie settings</p>
		<p>
			Quick note: I've got cookies watching my back to fend off any spammy shenanigans. It's how I
			roll to keep this place nice and tidy. I hope your cool about it! 😬
		</p>
		<p>
			Feel free to change your mind anytime! For more info, visit the <a href="/cookie-policy"
				>Cookie Policy</a
			> page.
		</p>
		<div class="action-container">
			<button on:click={handleCookieConsent}>Go for it!</button>
			<button on:click={handleCookieDeny}>Not today</button>
		</div>
	</aside>
{/if}

<style>
	aside {
		position: fixed;
		bottom: var(--spacing-l);
		left: var(--spacing-cookie-banner);
		background-color: var(--color-bg-light);
		padding: var(--spacing-l);
		border-radius: var(--border-radius-m);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		z-index: 100;
		width: 700px;
		display: flex;
		flex-direction: column;
	}
	p {
		margin: 0;
		font-size: var(--font-size-small);
	}
	p:first-child {
		font-size: var(--font-size-h3);
		font-weight: bold;
		margin-bottom: var(--spacing-s);
	}
	p:nth-child(2) {
		font-size: var(--font-size-b1);
	}
	p:nth-child(3) {
		margin-top: var(--spacing-m);
		font-size: var(--font-size-small);
	}
	button {
		all: unset;
		padding: var(--spacing-m);
		border-radius: var(--border-radius-s);
		cursor: pointer;
		text-align: center;
		min-width: 100px;
		&:first-child {
			background-color: var(--color-primary);
			color: var(--color-text-on-primary);
			&:hover {
				/* darken the bg with color mix */
				background-color: color-mix(in srgb, var(--color-primary) 90%, #000);
			}
		}
		&:last-child {
			border: 1px solid var(--color-error);
			color: var(--color-error);
			&:hover {
				background-color: var(--color-error);
				color: var(--color-text-on-secondary);
			}
		}
	}
	.action-container {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: var(--spacing-m);
		margin-top: var(--spacing-l);
	}
	@media screen and (max-width: 768px) {
		aside {
			width: 80%;
			left: 50%;
			transform: translateX(-50%);
		}
		button {
			flex-grow: 1;
		}
	}
</style>
