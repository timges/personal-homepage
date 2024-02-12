<script lang="ts">
	export let form;
	export let errors;
	export let name: string;
	export let placeholder: string;
	export let type: string;
	export let maxLength: number;
</script>

<fieldset>
	{#if type === 'textarea'}
		<textarea {name} bind:value={$form[name]} {placeholder} aria-invalid={!!$errors[name]} />
	{:else}
		<input
			{name}
			type="text"
			{placeholder}
			bind:value={$form[name]}
			aria-invalid={!!$errors[name]}
		/>
	{/if}
	<small>{$form[name].length}/{maxLength}</small>
</fieldset>

<style lang="scss">
	@import '../../../../../sass/_variables';

	input,
	textarea {
		width: 100%;
		background-color: $color-bg-dark;
		color: $color-primary;
		border: 1px solid $color-primary;
		padding: $spacing-m;
		font-size: $font-size-b1;
		font-family: inter, sans-serif;
		letter-spacing: $letter-spacing-m;
		&:focus {
			outline: 1px solid $color-primary;
		}

		&[aria-invalid='true']:not(:focus) {
			border: 1px solid $color-error;
		}
	}

	textarea {
		height: 200px;
		resize: none;
	}

	@media screen and (max-width: 768px) {
		textarea {
			height: 100px;
		}
		input,
		textarea {
			padding: $spacing-m;
		}
	}

	fieldset {
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
			font-size: $font-size-small;
			padding: $spacing-s;
		}
		:not(:focus) {
			& ~ small {
				visibility: hidden;
			}
		}
	}
</style>
