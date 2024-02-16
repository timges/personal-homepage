<script lang="ts">
	import WorkItem from './work-item.svelte';
	import items from './items';
</script>

<section id="work">
	<h2>THINGS, I WORKED ON</h2>
	{#each items as item (item.id)}
		<div class="work-item">
			<WorkItem
				title={item.title}
				description={item.description}
				tags={item.tags}
				icon={item.icon}
				link={item.link}
			/>
		</div>
	{/each}
</section>

<style lang="scss">
	@import '../../../../../sass/main';

	section {
		max-width: 100%;
		background-color: var(--color-bg-dark);
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: var(--spacing-l);
		padding: var(--spacing-xxl) 0;
	}

	h2 {
		grid-column: 2 / span all;
		color: var(--color-text-on-bg-light);
		line-height: var(--line-height-large);
	}

	@for $i from 1 through 3 {
		.work-item:nth-of-type(#{$i}) {
			grid-column: ($i * 2) / span 2;
			grid-row: 2;
		}

		.work-item:nth-last-of-type(#{$i}) {
			grid-column: ($i * 2) / span 2;
			grid-row: 3;
		}
	}

	@media screen and (max-width: 1260px) {
		.work-item:nth-of-type(even) {
			grid-column: 5 / span 3;
		}
		.work-item:nth-of-type(odd) {
			grid-column: 2 / span 3;
		}
		.work-item:nth-of-type(n + 3) {
			grid-row: 3;
		}
		.work-item:nth-of-type(n + 5) {
			grid-row: 4;
		}
	}

	@media screen and (max-width: 800px) {
		section {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-l);
			padding: var(--spacing-xxl) var(--spacing-l);
		}

		h2 {
			align-self: flex-start;
		}
	}
</style>
