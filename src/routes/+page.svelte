<script lang="ts">
	import WorkSection from '../lib/components/home/sections/my-work/work.section.svelte';
	import HeroSection from '../lib/components/home/sections/hero.section.svelte';
	import SkillsSection from '../lib/components/home/sections/skills/skills.section.svelte';
	import Experience from '$lib/components/home/sections/experience/experience.section.svelte';
	import ContactMe from '$lib/components/home/sections/contact/contact-me.section.svelte';
	import Footer from '$lib/components/home/sections/footer.svelte';
	import { cookieStatus } from '$lib/store/cookie-store';

	export let data;
</script>

<svelte:head>
	{#if $cookieStatus === 'accepted'}
		<script
			async
			src="https://www.google.com/recaptcha/api.js?render=6LdrcHApAAAAAL_j-HWDi5isOi1zUb-X85HbTnoB"
		></script>
	{/if}
</svelte:head>
<main>
	<HeroSection />
	<SkillsSection />
	<WorkSection />
	<Experience />
	<ContactMe {data} />
	<Footer />
</main>
