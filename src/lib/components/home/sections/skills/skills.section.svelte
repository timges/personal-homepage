<script lang="ts">
	import AwsIcon from './icons/aws-icon.svelte';
	import CssIcon from './icons/css-icon.svelte';
	import HtmlIcon from './icons/html-icon.svelte';
	import NodeJsIcon from './icons/node-js-icon.svelte';
	import ReactIcon from './icons/react-icon.svelte';
	import TsIcon from './icons/ts-icon.svelte';

	let innerWidth: number;
	$: clipPathVertical = `polygon(100px 0, 100% 0, 100% 100%, 0 100%)`;
	$: clipPathHorizontal = `polygon(0 8%, 100% 0, 100% 100%, 0% 100%)`;
</script>

<svelte:window bind:innerWidth />
<section id="skills">
	<h2>STUFF, I'M GOOD AT</h2>
	<div class="content-wrapper">
		<TsIcon />
		<AwsIcon />
		<ReactIcon />
		<HtmlIcon />
		<CssIcon />
		<NodeJsIcon />
	</div>
</section>

<style lang="scss">
	@import '../../../../../sass/main.scss';

	section {
		width: 100%;
		background-color: $color-bg-dark;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		// grid-template-rows: repeat(8, 1fr);
		gap: $spacing-l;
		color: $color-text-on-bg-light;
		padding: $spacing-xxl 0;
	}
	.content-wrapper {
		grid-column: 2 / span 6;
		grid-row: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: $spacing-xxl;
	}
	h2 {
		word-wrap: nowrap;
		grid-column: 2 / span all;
		line-height: $line-height-large;
	}

	@media (max-width: 768px) {
		section {
			padding: $spacing-l;
			display: flex;
			flex-direction: column;
		}
		.content-wrapper {
			flex-direction: row;
			flex-wrap: wrap;
			gap: $spacing-l;
		}
	}
</style>
