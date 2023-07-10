<script>
	import WorkSection from '../lib/components/home/sections/my-work/work.section.svelte';
	import HeroSection from '../lib/components/home/sections/hero.section.svelte';
	import SkillsSection from '../lib/components//home/sections/skills.section.svelte';
	import Experience from '$lib/components/home/sections/experience.section.svelte';
	import ContactMe from '$lib/components/home/sections/contact-me.section.svelte';
</script>

<main>
	<HeroSection />
	<SkillsSection />
	<WorkSection />
	<Experience />
	<ContactMe />
</main>

<style lang="scss">
	@import '../sass/main.scss';
</style>
