<script lang="ts">
	import Socials from '$lib/components/socials.svelte';
	import NavBar from '../lib/components/nav-bar.svelte';
</script>

<NavBar />
<Socials />

<slot />

<style lang="scss" global>
	@import '../sass/main.scss';
	:root {
		letter-spacing: $letter-spacing-l;
		scroll-behavior: smooth;
		overflow-x: hidden;
	}
</style>
