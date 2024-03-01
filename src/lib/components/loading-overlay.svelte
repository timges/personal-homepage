<script>
	import LoadingIndicator from './loading-indicator.svelte';
</script>

<div class="loading-overlay">
	<LoadingIndicator />
</div>

<style lang="scss">
	@import '../../sass/main';
	:global(body) {
		overflow: hidden;
	}
	.loading-overlay {
		position: fixed;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-bg-dark);
		z-index: 400;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
