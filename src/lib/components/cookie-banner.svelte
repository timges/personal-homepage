<script lang="ts">
	import { cookieStatus } from '$lib/store/cookie-store';
	import { onMount } from 'svelte';
	import { bounceIn } from 'svelte/easing';
	import { slide, type SlideParams } from 'svelte/transition';

	const slideInSettings = {
		duration: 300,
		easning: bounceIn,
		delay: 2000
	} as SlideParams;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
	function handleCookieConsent() {
		$cookieStatus = 'accepted';
	}
	function handleCookieDeny() {
		$cookieStatus = 'declined';
	}
</script>

{#if mounted}
	<aside in:slide={slideInSettings}>
		<p>🍪 Cookie settings</p>
		<p>
			Quick note: I've got cookies watching my back to fend off any spammy shenanigans. It's how I
			roll to keep this place nice and tidy. Thanks for being cool about it!
		</p>
		<div class="action-container">
			<button on:click={handleCookieConsent}>I want cookies!!</button>
			<button on:click={handleCookieDeny}>Not today</button>
		</div>
	</aside>
{/if}

<style>
	aside {
		position: fixed;
		bottom: var(--spacing-l);
		left: var(--spacing-xxl);
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
	p {
		font-size: var(--font-size-b1);
	}
	button {
		all: unset;
		padding: var(--spacing-m);
		border-radius: var(--border-radius-s);
		cursor: pointer;
		text-align: center;
		&:first-child {
			background-color: var(--color-success);
			color: var(--color-text-on-primary);
			&:hover {
				/* darken the bg with color mix */
				background-color: color-mix(in srgb, var(--color-success) 90%, black);
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
		gap: var(--spacing-l);
		margin-top: var(--spacing-l);
	}
	@media screen and (max-width: 768px) {
		aside {
			width: 80%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
