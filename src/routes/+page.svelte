<script>
	import WorkSection from '../lib/components/home/sections/my-work/work.section.svelte';
	import HeroSection from '../lib/components/home/sections/hero.section.svelte';
	import SkillsSection from '../lib/components/home/sections/skills/skills.section.svelte';
	import Experience from '$lib/components/home/sections/experience/experience.section.svelte';
	import ContactMe from '$lib/components/home/sections/contact-me.section.svelte';
</script>

<main>
	<HeroSection />
	<SkillsSection />
	<WorkSection />
	<section id="animation-container">
		<Experience />
	</section>
	<ContactMe />
</main>
