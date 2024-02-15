<script>
	import WorkSection from '../lib/components/home/sections/my-work/work.section.svelte';
	import HeroSection from '../lib/components/home/sections/hero.section.svelte';
	import SkillsSection from '../lib/components/home/sections/skills/skills.section.svelte';
	import Experience from '$lib/components/home/sections/experience/experience.section.svelte';
	import ContactMe from '$lib/components/home/sections/contact/contact-me.section.svelte';
	import Footer from '$lib/components/home/sections/footer.svelte';

	export let data;
</script>

<svelte:head>
	<script
		src="https://www.google.com/recaptcha/api.js?render=6LdrcHApAAAAAL_j-HWDi5isOi1zUb-X85HbTnoB"
	></script>
</svelte:head>
<main>
	<HeroSection />
	<SkillsSection />
	<WorkSection />
	<Experience />
	<ContactMe {data} />
	<Footer />
</main>
