<script lang="ts">
	import WorkItem from './work-item.svelte';
	import items from './items';
</script>

<section id="work">
	<h2>THINGS, I BUILT</h2>
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
	@import '../../../../../sass/main.scss';

	section {
		max-width: 100%;
		background-color: $color-bg-light;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: $spacing-l;
		padding: $spacing-xxl 0;
	}

	h2 {
		grid-column: 2 / span all;
		white-space: nowrap;
		color: $color-text-on-bg-light;
		line-height: $line-height-large;
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

	@media screen and (max-width: 1100px) {
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

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			gap: $spacing-l;
			padding: $spacing-xxl $spacing-l;
		}

		h2 {
			align-self: flex-start;
		}
	}
</style>
