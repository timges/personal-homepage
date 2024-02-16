<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	export let description: string;
	export let tags: string[];
	export let icon: 'link' | 'github' | undefined = undefined;
	export let link: string | undefined = undefined;

	const dispatch = createEventDispatcher();

	function dispatchContainerClickEvent() {
		dispatch('container-click');
	}
</script>

<button class="container" on:click={dispatchContainerClickEvent}>
	<h3>{title}</h3>
	<p class="description">{description}</p>
	<div class="meta-container">
		<ul>
			{#each tags as tag}
				<li><p>{tag}</p></li>
			{/each}
		</ul>
		<div class="icon">
			<a href={link} target="_blank">
				{#if icon === 'link'}
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<title>Link Icon to external resource</title>
						<path
							d="M5 3C3.90694 3 3 3.90694 3 5V19C3 20.0931 3.90694 21 5 21H19C20.0931 21 21 20.0931 21 19V12H19V19H5V5H12V3H5ZM14 3V5H17.5859L8.29297 14.293L9.70703 15.707L19 6.41406V10H21V3H14Z"
						/>
					</svg>
				{:else if icon === 'github'}
					<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<title>Link Icon to Github repository</title>
						<path
							d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
						/>
					</svg>
				{/if}
			</a>
		</div>
	</div>
</button>

<style lang="scss">
	@import '../../../../../sass/main';

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		margin: var(--spacing-m) 0;

		li {
			margin-right: var(--spacing-m);
			color: color-mix(in srgb, var(--color-text-on-bg-light) 40%, transparent);
			font-weight: lighter;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	svg {
		fill: var(--color-primary);
	}
	.description {
		height: 300px;
	}
	.container {
		all: unset;
		display: flex;
		align-items: stretch;
		cursor: pointer;
		flex-direction: column;
		letter-spacing: var(--letter-spacing-l);
		background-color: var(--color-bg-light);
		padding: var(--spacing-l);
		border-radius: var(--border-radius-s);
		transition:
			background-color 0.2s ease-in-out,
			transform 0.2s ease-in-out;
		height: 350px;

		&:hover {
			background-color: var(--color-secondary);
			transform: scale(1.05);
			color: var(--color-text-on-secondary);

			svg {
				fill: var(--color-text-on-secondary);

				&:hover {
					fill: var(--color-primary);
				}
			}
		}
	}

	.icon {
		align-self: flex-end;
	}
	.container > p {
		min-height: 150px;
	}

	.meta-container {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
	}
	h3 {
		font-size: var(--font-size-h3);
		margin-bottom: var(--spacing-m);
		font-weight: normal;
	}
</style>
