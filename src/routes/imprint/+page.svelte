<script>
	import SeoHead from '$lib/components/seo-head.svelte';
</script>

<SeoHead
	title="Imprint"
	description="
Author: Tim Gesemann,
Site: htts://tim-gesemann.dev/imprint,
Context: Imprint,
This is the imprint of Tim Gesemann's personal website. It contains information about the author and the website.
"
/>
<section>
	<h1>Imprint</h1>
	<p>Information in accordance with Section 5 TMG</p>
	<div>
		<h2>Name</h2>
		<p>Tim Gesemann</p>
	</div>
	<div>
		<h2>Address</h2>
		<p>Wittekindstr. 49</p>
		<p>30449 Hannover</p>
		<p>Germany</p>
	</div>
	<div>
		<h2>Contact Information:</h2>
		<p>Email: contact@tim-gesemann.dev</p>
	</div>
</section>

<style lang="scss">
	@import '../../sass/main';
	:global(body, html) {
		height: 100%;
		background-color: var(--color-bg-dark);
		overflow-x: hidden;
		scroll-behavior: smooth;
	}
	section {
		padding: var(--spacing-page-inset) var(--spacing-page-inset);
		background-color: var(--color-bg-dark);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-l);
	}

	h1 {
		font-size: var(--font-size-b2);
	}
	h2 {
		font-size: var(--font-size-b1);
	}
</style>
