<script>
	import WorkSection from '../lib/components/home/sections/my-work/work.section.svelte';
	import HeroSection from '../lib/components/home/sections/hero.section.svelte';
	import SkillsSection from '../lib/components/home/sections/skills/skills.section.svelte';
	import Experience from '$lib/components/home/sections/experience/experience.section.svelte';
	import ContactMe from '$lib/components/home/sections/contact/contact-me.section.svelte';

	export let data;
</script>

<main>
	<HeroSection />
	<SkillsSection />
	<WorkSection />
	<Experience />
	<ContactMe {data}/>
</main>
