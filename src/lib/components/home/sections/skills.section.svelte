<script lang="ts">
	import { tweened } from 'svelte/motion';
	let sectionHeight: number = 0;
	let section: HTMLElement;

	//TODO: cleanup
	const mousePosXPercentFromLeft = tweened(46, { duration: 50 });
	const mousePosYPercentFromTop = tweened(0, { duration: 50 });
	function handleMouseMove(event: MouseEvent) {
		// $mousePosXPercentFromLeft = (event.clientX / window.innerWidth) * 100;
		// $mousePosYPercentFromTop = (event.offsetY / sectionHeight) * 100;
	}

	$: clipPath = `polygon(100px 0, 100% 0, 100% 100%, 0 100%)`;
	// $mousePosYPercentFromTop > 50
	// 	? `polygon(0 0, 100% 0, 100% 100%, 100px 100%)`
	// 	: `polygon(100px 0, 100% 0, 100% 100%, 0 100%)`;
</script>

<section
	id="about"
	bind:this={section}
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
			At the age of 14, my cousin introduced me to coding, and I instantly knew I had discovered my
			passion. The ability to create and problem-solve through lines of code fascinated me. Since
			then, my aspiration to become a software developer has only intensified, driving me to pursue
			this rewarding career path.
		</p>
	</div>
	<div class="design">
		<h2>DESIGN</h2>
		<p>
			Collaborating closely with talented designers awakened my curiosity for the principles of
			design, fueling my wish to become a true full-stack creator. Witnessing how design
			seamlessly intertwines with code inspired me to explore its possibilities, and I have been
			learning and practicing design ever since. Embracing both disciplines empowers me to craft
			exceptional and user-centered digital experiences
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
		grid-template-rows: repeat(8, 1fr);
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
		background: $color-secondary;
		right: 0;
		transition: clip-path 0.1s ease-in-out;
	}
	.overlay-dev {
		background: $color-primary;
		left: 0;
	}

	.development {
		grid-column: 2 / 4;
		grid-row: 3 / 7;
		z-index: 1;
		background-color: transparent;
		margin: 0 0 $spacing-xl 0;
	}

	.design {
		grid-column: 6 / 8;
		grid-row: 3 / 7;
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
