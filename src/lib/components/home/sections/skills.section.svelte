<script lang="ts">
	import { tweened } from 'svelte/motion';
	let sectionHeight: number = 0;

	const mousePosXPercentFromLeft = tweened(45, { duration: 50 });
	const mousePosYPercentFromTop = tweened(0, { duration: 50 });
	function handleMouseMove(event: MouseEvent) {
		$mousePosXPercentFromLeft = (event.clientX / window.innerWidth) * 100;
		$mousePosYPercentFromTop = (event.offsetY / sectionHeight) * 100;
	}

	$: clipPath = `polygon(100px 0, 100% 0, 100% 100%, 0 100%)`;
		// $mousePosYPercentFromTop > 50
		// 	? `polygon(0 0, 100% 0, 100% 100%, 100px 100%)`
		// 	: `polygon(100px 0, 100% 0, 100% 100%, 0 100%)`;
</script>

<section
	id="skills"
	on:mousemove={handleMouseMove}
	on:mouseenter={handleMouseMove}
	bind:clientHeight={sectionHeight}
>
	<div
		class="overlay-dev"
		style:width={`${$mousePosXPercentFromLeft + 30 >= 100 ? 100 : $mousePosXPercentFromLeft + 30}%`}
	/>
	<div
		class="overlay-design"
		style:width={`${100 - $mousePosXPercentFromLeft}%`}
		style:clip-path={clipPath}
	/>
	<div class="development">
		<h2>DEVELOPMENT</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, saepe. Laborum temporibus
			possimus nam odio, totam sint obcaecati qui pariatur eius, tenetur expedita reiciendis et
			ipsam. Exercitationem fugit a ea!
		</p>
	</div>
	<div class="design">
		<h2>DESIGN</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore neque praesentium minus sit,
			quas pariatur adipisci, quasi autem fugiat, ab reprehenderit aspernatur temporibus dicta
			quisquam ad accusantium. Eligendi, iste ratione?
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../../../sass/main.scss';

	section {
		width: 100%;
		background-color: $color-bg-dark;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(4, 1fr);
		column-gap: $spacing-l;
		position: relative;
	}

	.overlay-dev,
	.overlay-design {
		position: absolute;
		height: 100%;
		top: 0;
	}

	.overlay-design {
		background: $color-primary;
		right: 0;
		transition: clip-path 0.1s ease-in-out;
	}
	.overlay-dev {
		background: $color-secondary;
		left: 0;
	}

	.development {
		grid-column: 2 / 5;
		grid-row: 2 / 3;
		z-index: 1;
		background-color: transparent;
		margin: 0 0 $spacing-xl 0;
	}

	.design {
		grid-column: 5 / 8;
		grid-row: 3 / 4;
		z-index: 1;
		background-color: transparent;
	}

	h2 {
		color: $color-text-on-bg-dark;
		line-height: $line-height-large;
		padding: 0 0 $spacing-s 0;
	}

	p {
		color: $color-text-on-bg-dark;
	}

	@media screen and (max-width: 768px) {
		section {
			display: flex;
			flex-direction: column;
			padding: $spacing-xxl $spacing-l;
			gap: $spacing-xxl;
		}
		.development {
		}

		.design {
			grid-column: 2 / 8;
			grid-row: 5 / 9;
		}
	}
</style>
