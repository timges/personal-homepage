<script>
	import { fly } from 'svelte/transition';
</script>

<span transition:fly class="loader"></span>

<style lang="scss">
	@use '../../sass/main';
	.loader {
		position: relative;
		width: 100px;
		height: 16px;
	}
	.loader:before,
	.loader:after {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-primary);
		box-shadow: 32px 0 var(--color-secondary);
		left: 0;
		top: 0;
		animation: ballMoveX 1s linear infinite;
	}
	.loader:after {
		box-shadow: none;
		transform-origin: 40px 0;
		transform: rotate(-153deg);
		animation: rotateLoader 1s linear infinite;
	}

	@keyframes rotateLoader {
		0%,
		10% {
			transform: rotate(-153deg);
		}
		90%,
		100% {
			transform: rotate(0deg);
		}
	}
	@keyframes ballMoveX {
		0%,
		10% {
			transform: translateX(0);
		}
		90%,
		100% {
			transform: translateX(32px);
		}
	}
</style>
