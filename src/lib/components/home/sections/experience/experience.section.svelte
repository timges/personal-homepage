<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './scene.svelte';
</script>

<section id="canvas">
	<Canvas
		rendererParameters={{
			antialias: true,
			alpha: true,
		}}
	>
		<Scene />
	</Canvas>
</section>

<style lang="scss">
	@import '../../../../../sass/main.scss';

	section {
		z-index: 98;
		background: transparent;
		width: 100%;
		height: 100vh;
		width: 100%;
		position: sticky;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
