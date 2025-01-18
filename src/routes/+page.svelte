<script lang="ts">
	import WorkSection from '../lib/components/home/sections/my-work/work.section.svelte';
	import HeroSection from '../lib/components/home/sections/hero.section.svelte';
	import SkillsSection from '../lib/components/home/sections/skills/skills.section.svelte';
	import Experience from '$lib/components/home/sections/experience/experience.section.svelte';
	import ContactMe from '$lib/components/home/sections/contact/contact-me.section.svelte';
	import Footer from '$lib/components/home/sections/footer.svelte';
	import ExternalScriptLoader from '$lib/components/external-script-loader.svelte';
	import SeoHead from '$lib/components/seo-head.svelte';

	let { data } = $props();
</script>

<SeoHead
	mainEntityOfPage
	title="Tim Gesemann"
	description="
	Author: Tim Gesemann,
	Site: htts://tim-gesemann.dev/,
	Context: Landing Page,
	This is the landing page of Tim Gesemann's personal website. He is a Fullstack Software Developer from Hannover, Germany. It contains information about the author, his skills, his work, and his contact information.
"
/>
<ExternalScriptLoader />
<main>
	<HeroSection />
	<SkillsSection />
	<WorkSection />
	<Experience />
	<ContactMe {data} />
	<Footer />
</main>
