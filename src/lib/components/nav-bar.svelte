<nav id="nav">
	<div>ICON</div>
	<ul>
		<li><a href="/#skills">Skills</a></li>
		<li><a href="/#work">My Work</a></li>
		<li><a href="/contact">Experience</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '../../sass/main.scss';

	nav {
		background-color: $color-bg-light;
		display: flex;
		justify-content: space-between;
		padding: $spacing-l $spacing-xxl;
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
		transition: transform 0.2s ease-in-out;
		a {
			text-decoration: none;
			color: $color-primary;
			transition: color 0.2s ease-in-out;
		}
		&:hover {
			transform: scale(1.1);
			a {
				color: $color-secondary;
			}
		}
	}

	@media screen and (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
