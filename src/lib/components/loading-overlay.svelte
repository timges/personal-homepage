<div class="loading-overlay">
	<span class="loader"></span>
</div>

<style lang="scss">
	@import '../../sass/main';
	:global(body) {
		overflow: hidden;
	}
	.loader {
		position: absolute;
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
