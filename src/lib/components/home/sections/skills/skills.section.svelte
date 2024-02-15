<script lang="ts">
	import AwsIcon from './icons/aws-icon.svelte';
	import CssIcon from './icons/css-icon.svelte';
	import HtmlIcon from './icons/html-icon.svelte';
	import JavaIcon from './icons/java-icon.svelte';
	import MySqlIcon from './icons/my-sql-icon.svelte';
	import NodeJsIcon from './icons/node-js-icon.svelte';
	import ReactIcon from './icons/react-icon.svelte';
	import TsIcon from './icons/ts-icon.svelte';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<section id="skills">
	<h2>I'M GOOD AT THIS</h2>
	<div class="content-wrapper">
		<a href="https://www.typescriptlang.org/">
			<TsIcon />
		</a>
		<a href="https://aws.amazon.com/de/"><AwsIcon /></a>
		<a href="https://react.dev/"><ReactIcon /></a>
		<a href="https://wiki.selfhtml.org/wiki/HTML"><HtmlIcon /></a>
		<a href="https://wiki.selfhtml.org/wiki/CSS"><CssIcon /></a>
		<a href="https://nodejs.org/en"><NodeJsIcon /></a>
		<a href="https://www.java.com/de/"><JavaIcon /></a>
		<a href="https://www.mysql.com/de/"><MySqlIcon /></a>
	</div>
</section>

<style lang="scss">
	@import '../../../../../sass/main.scss';

	section {
		width: 100%;
		background-color: var(--color-bg-light);
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		// grid-template-rows: repeat(8, 1fr);
		gap: var(--spacing-l);
		color: var(--color-text-on-bg-light);
		padding: var(--spacing-xxl) 0;
	}
	.content-wrapper {
		grid-column: 2 / span 6;
		grid-row: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-xxl);
	}
	h2 {
		word-wrap: nowrap;
		grid-column: 2 / span all;
		line-height: var(--line-height-large);
	}
	a:hover {
		transform: scale(1.1);
	}
	a {
		transition: transform 0.2s ease-in-out;
	}
	@media (max-width: 768px) {
		section {
			padding: var(--spacing-l);
			display: flex;
			flex-direction: column;
		}
		.content-wrapper {
			flex-direction: row;
			flex-wrap: wrap;
			gap: var(--spacing-l);
		}
	}
</style>
