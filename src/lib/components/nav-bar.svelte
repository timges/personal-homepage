<script>
	import viewport from '../../util/useViewportAction';
</script>

<nav id="nav" use:viewport on:exit-viewport on:enter-viewport>
	<div>
		<a href="/">
			<p>t</p>
		</a>
	</div>
	<ul>
		<li><a href="/#skills">Skills</a></li>
		<li><a href="/#work">My Work</a></li>
		<li><a href="/#experience">Experience</a></li>
		<li><a href="/#contact-me">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '../../sass/main.scss';

	nav {
		background-color: $color-bg-light;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $spacing-l $spacing-page-inset;
		letter-spacing: $letter-spacing-l;
		width: 100%;
		font-size: 0.8rem;
	}
	ul {
		list-style: none;
		display: flex;
		gap: $spacing-xl;
	}
	li {
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		&:after {
			display: block;
			content: '';
			width: 0;
			height: 1px;
			margin: $spacing-xs auto;
		}
		&:hover {
			transform: scale(1.1);
			a {
				color: $color-secondary;
			}
			&:after {
				width: 100%;
				background-color: $color-secondary;
				transition: width 0.2s ease-in-out;
			}
		}
	}
	a {
		text-decoration: none;
		color: $color-primary;
		transition: color 0.2s ease-in-out;
		padding: $spacing-s 0;
	}
	button {
		all: unset;
		cursor: pointer;
	}
	p {
		font-size: 2.5rem;
		color: $color-primary;
		font-weight: normal;
		font-family: type-writer;

		&:hover {
			color: $color-secondary;
		}
		transition: color 0.2s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
