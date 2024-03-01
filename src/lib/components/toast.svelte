<script>
	import { fly } from 'svelte/transition';

	export let severity = 'error';
	export let message = 'This is a toast message';
	export let display = false;

	function hideToast() {
		display = false;
	}
</script>

{#if display}
	<aside class={severity} transition:fly>
		<p>{message}</p>
		<button on:click={hideToast}>X</button>
	</aside>
{/if}

<style lang="scss">
	@import '../../sass/main';

	aside {
		position: fixed;
		bottom: var(--spacing-l);
		padding: var(--spacing-m);
		left: 50%;
		transform: translateX(-50%);
		border-radius: var(--border-radius-s);
		background-color: var(--color-error);
		box-shadow: var(--shadow);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-xl);
		color: var(--color-text-on-primary);
		font-size: var(--font-size-b1);
		width: fit-content;
	}

	button {
		all: unset;
		cursor: pointer;
		color: var(--color-text-on-primary);

		&:hover {
			//darken the white color a bit
			color: color-mix(in srgb, var(--color-text-on-primary) 90%, #000);
		}
	}
</style>
