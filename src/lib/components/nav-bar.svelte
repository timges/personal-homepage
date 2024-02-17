<script>
	import viewport from '../../util/useViewportAction';
</script>

<nav id="nav" use:viewport on:exit-viewport on:enter-viewport>
	<div>
		<a href="/">
			<p>tg</p>
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
	@import '../../sass/main';

	nav {
		background-color: var(--color-bg-dark);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-l) var(--spacing-page-inset);
		letter-spacing: var(--letter-spacing-l);
		width: 100%;
		font-size: 0.8rem;
	}
	ul {
		list-style: none;
		display: flex;
		gap: var(--spacing-xl);
	}
	a {
		text-decoration: none;
		color: var(--color-primary);
		transition: color 0.2s ease-in-out;
		padding: var(--spacing-s) 0;
	}
	li {
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		&:after {
			display: block;
			content: '';
			width: 0;
			height: 1px;
			margin: var(--spacing-xs) auto;
		}
		&:hover {
			transform: scale(1.1);
			a {
				color: var(--color-secondary);
			}
			&:after {
				width: 100%;
				background-color: var(--color-secondary);
				transition: width 0.2s ease-in-out;
			}
		}
	}
	button {
		all: unset;
		cursor: pointer;
	}
	p {
		font-size: 2.5rem;
		color: var(--color-primary);
		font-weight: normal;
		font-family: type-writer;

		&:hover {
			color: var(--color-secondary);
		}
		transition: color 0.2s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
