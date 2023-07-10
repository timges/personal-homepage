<script lang="ts">
	import Socials from '$lib/components/socials.svelte';
	import NavBar from '../lib/components/nav-bar.svelte';

	let showBackToTop: boolean;
</script>

<NavBar on:exit-viewport={() => (showBackToTop = true)} on:enter-viewport={() => showBackToTop=false}/>
<Socials {showBackToTop} />

<slot />

<style lang="scss" global>
	@import '../sass/main.scss';
	:root {
		letter-spacing: $letter-spacing-l;
		scroll-behavior: smooth;
	}
</style>
