<script lang="ts">
	import CookieBanner from '$lib/components/cookie-banner.svelte';
	import Socials from '$lib/components/socials.svelte';
	import { cookieStatus } from '$lib/store/cookie-store';
	import NavBar from '../lib/components/nav-bar.svelte';
	let showBackToTop: boolean;
</script>

<NavBar
	on:exit-viewport={() => (showBackToTop = true)}
	on:enter-viewport={() => (showBackToTop = false)}
/>
<Socials {showBackToTop} />

<slot />

{#if $cookieStatus === 'not-answered'}
	<CookieBanner />
{/if}

<style lang="scss" global>
	@import '../sass/main.scss';
	:global(:root) {
		letter-spacing: var(--letter-spacing-l);
		scroll-behavior: smooth;
	}

	:global(*) {
		@font-face {
			font-family: type-writer;
			src: url('/fonts/type-writer.ttf');
		}
	}
	:global(.grecaptcha-badge) {
		visibility: hidden;
	}
</style>
