<script lang="ts">
	import { computePosition } from '@floating-ui/dom';
	import { onMount } from 'svelte';

	export let form;
	export let errors;
	export let name: string;
	export let placeholder: string;
	export let type: string;
	export let maxLength: number;

	let popoverRef: HTMLDivElement | undefined;
	let containerRef: HTMLDivElement;
	let popoverOffsetLeft: number = 0;
	let popoverOffsetTop: number = 0;
	let popoverWidth: number = 0;
	let suppressPopover: boolean = false;
	$: $errors[name] ? showPopover() : closePopover();
	$: suppressPopover && setTimeout(() => (suppressPopover = false), 5000);

	function handleToggle({ newState }: ToggleEvent) {
		if (newState === 'closed') {
			return;
		}
		if (newState === 'open') {
			updatePopoverPositionAndDimension();
		}
	}
	async function updatePopoverPositionAndDimension() {
		if (!popoverRef) return;
		const { x, y } = await computePosition(containerRef, popoverRef, {
			placement: 'bottom-start'
		});
		popoverOffsetLeft = x;
		popoverOffsetTop = y;
		popoverWidth = containerRef.clientWidth;
	}

	onMount(updatePopoverPositionAndDimension);

	function handleCloseClicked() {
		suppressPopover = true;
		closePopover();
	}
	function closePopover() {
		popoverRef?.hidePopover();
	}
	function showPopover() {
		if (suppressPopover) return;
		popoverRef?.showPopover();
	}
</script>

<svelte:window
	on:resize={updatePopoverPositionAndDimension}
	on:scroll={updatePopoverPositionAndDimension}
/>
<div bind:this={containerRef} class="input-container">
	{#if type === 'textarea'}
		<textarea
			title={`Your ${name}`}
			{name}
			bind:value={$form[name]}
			{placeholder}
			aria-invalid={!!$errors[name]}
		/>
	{:else}
		<input
			title={`Your ${name}`}
			{name}
			type="text"
			{placeholder}
			bind:value={$form[name]}
			aria-invalid={!!$errors[name]}
		/>
	{/if}
	<small>{$form[name].length}/{maxLength}</small>
	<div
		bind:this={popoverRef}
		popover="manual"
		style:top={`calc(${popoverOffsetTop}px`}
		style:left={`${popoverOffsetLeft}px`}
		style:width={`${popoverWidth}px`}
		on:beforetoggle={handleToggle}
	>
		<button on:click={handleCloseClicked} tabindex="-1" type="button">
			<p>{$errors[name]?.[0]}</p>
			<p>X</p>
		</button>
	</div>
</div>

<style lang="scss">
	@import '../../../../../sass/variables';

	input,
	textarea {
		width: 100%;
		background-color: var(--color-bg-light);
		color: var(--color-primary);
		border: 1px solid var(--color-primary);
		padding: var(--spacing-m);
		font-size: var(--font-size-b1);
		font-family: inter, sans-serif;
		letter-spacing: var(--letter-spacing-m);
		&:focus {
			outline: 1px solid var(--color-primary);
		}

		&[aria-invalid='true']:not(:focus) {
			border: 1px solid var(--color-error);
		}
	}

	textarea {
		height: 200px;
		resize: none;
	}

	.input-container {
		position: relative;
		display: flex;
		align-items: center;
		border: none;
		width: 100%;
		height: 100%;
		small {
			position: absolute;
			bottom: 0;
			right: 0;
			color: black;
			font-size: var(--font-size-small);
			padding: var(--spacing-s);
		}
		:not(:focus) {
			& ~ small {
				visibility: hidden;
			}
		}
	}
	[popover] {
		border: none;
		position: absolute;
		background-color: var(--color-error);
		overflow: unset;
		margin-top: var(--spacing-s);
		border-radius: var(--border-radius-m);
		z-index: 2;
		padding: var(--spacing-m);
		font-size: var(--font-size-small);
		font-weight: 500;
		color: white;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		&::after {
			display: block;
			width: 0;
			content: '';
			border: 6px solid transparent;
			border-bottom-color: var(--color-error);
			top: -10px;
			left: var(--spacing-m);
			position: absolute;
			border-radius: var(--border-radius-s);
		}

		button {
			all: unset;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			cursor: pointer;
		}
	}

	@media screen and (max-width: 768px) {
		textarea {
			height: 100px;
		}
		input,
		textarea {
			padding: var(--spacing-m);
		}
	}
</style>
