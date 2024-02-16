<section>
	<ul>
		<li>
			<a href="/imprint"><li>Imprint</li></a>
		</li>
		<li>|</li>
		<li>
			<a href="/privacy-policy"><li>Privacy Policy</li></a>
		</li>
		<li>|</li>
		<li>
			<a href="/cookie-policy"><li>Cookie Policy</li></a>
		</li>
	</ul>
	<p>© 2024 Tim Gesemann. All rights reserved.</p>
</section>

<style>
	section {
		padding: var(--spacing-xxl) var(--spacing-l);
		background-color: var(--color-bg-dark);
	}
	ul {
		display: flex;
		gap: var(--spacing-m);
		justify-content: center;
		align-items: center;
		list-style: none;
		color: var(--color-primary);
	}
	a {
		color: var(--color-primary);
		text-decoration: none;
		font-size: var(--font-size-small);
		transition: all 0.3s ease;
		&::after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			background-color: var(--color-primary);
			transition: width 0.3s ease;
		}
		&:hover {
			transform: scale(1.05);
			&::after {
				width: 100%;
			}
		}
	}
	p {
		text-align: center;
		color: var(--color-primary);
		font-size: var(--font-size-small);
		margin-top: var(--spacing-xl);
	}

	@media screen and (max-width: 768px) {
		ul {
			flex-direction: column;
			gap: var(--spacing-xs);
		}
	}
</style>
