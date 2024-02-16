<script lang="ts">
	import SeoHead from '$lib/components/seo-head.svelte';
	import { cookieStatus } from '$lib/store/cookie-store';

	function handleCookieConsent() {
		if ($cookieStatus !== 'accepted') {
			$cookieStatus = 'accepted';
			return;
		}
		$cookieStatus = 'declined';
		localStorage.clear();
	}
</script>

<SeoHead
	title="Cookie Policy"
	description="
  Author: Tim Gesemann,
  Site: htts://tim-gesemann.dev/cookie-policy,
  Context: Cookie Policy,
  This is the cookie policy of Tim Gesemann's personal website. It contains information about the use of cookies and similar technologies. It also explains how to control cookies and how to contact the author.
"
/>
<section>
	<h1>Cookie Policy</h1>
	<p>Last updated: 15.02.2024</p>
	<p>
		This Cookie Policy explains how I (Tim Gesemann) use cookies and similar technologies to collect
		and store information when you visit my website <a href="https://tim-gesemann.dev"
			>tim-gesemann.dev</a
		>
	</p>
	<h2>What are cookies?</h2>
	<p>
		Cookies are small text files that are stored on your device (computer, tablet, or mobile phone)
		when you visit a website. They are widely used to make websites work more efficiently and to
		provide information to website owners.
	</p>
	<h2>How do I use cookies?</h2>
	<p>I use cookies for a variety of purposes, including:</p>
	<ol>
		<li>
			<strong>Google reCAPTCHA:</strong> I use Google reCAPTCHA to protect my Website from spam and abuse.
			Google reCAPTCHA may collect personal information from users to determine whether they are human
			or bots. Please refer to Google's Privacy Policy for more information on how Google processes data.
		</li>
		<li>
			<strong>Google Analytics:</strong> I use Google Analytics to analyze the usage of my Website and
			to improve its performance and user experience. Google Analytics collects information such as your
			IP address, browser type, device type, and pages visited on my Website. This information is aggregated
			and anonymized before being used for analysis. Please refer to Google's Privacy Policy for more
			information on how Google Analytics collects and processes data.
		</li>
	</ol>

	<h2>What types of cookies do I use?</h2>

	<p>
		I use both session cookies and persistent cookies on my Website. Session cookies are temporary
		and are deleted when you close your browser, while persistent cookies remain on your device for
		a longer period of time.
	</p>

	<h2>How to control cookies</h2>

	<p>
		You can control and/or delete cookies as you wish. You can delete all cookies that are already
		on your device and you can set most browsers to prevent them from being placed. If you do this,
		however, you may have to manually adjust some preferences every time you visit a site and some
		services and functionalities may not work.
	</p>

	<h2>Updates to this Cookie Policy</h2>

	<p>
		I may update this Cookie Policy from time to time. Any changes will be posted on this page with
		a revised "last updated" date. I encourage you to check this page periodically for any updates.
	</p>

	<h2>Contact me</h2>

	<p>
		If you have any questions about my use of cookies, please contact me at
		contact@tim-gesemann.dev.
	</p>

	<h2>Change cookie settings</h2>
	<p>You can change your cookie settings at any time by clicking the button below.</p>
	<div>
		{#if $cookieStatus === 'accepted'}
			<p>Cookies are curretly <strong>allowed</strong>.</p>
			<button class="disable-btn" on:click={handleCookieConsent}>Disable now</button>
		{:else}
			<p>Cookies are curretly <strong>disabled</strong>.</p>
			<button class="enable-btn" on:click={handleCookieConsent}>Enable now</button>
		{/if}
	</div>
</section>

<style lang="scss">
	:global(html, body) {
		height: 100%;
		background-color: var(--color-bg-dark);
		overflow-x: hidden;
		scroll-behavior: smooth;
	}

	section {
		padding: var(--spacing-page-inset);

		li {
			margin-left: var(--spacing-xxl);
		}
		h1 {
			margin-bottom: var(--spacing-xl);
		}
		h2 {
			margin-top: var(--spacing-xl);
			margin-bottom: var(--spacing-l);
		}
		h3 {
			margin-top: var(--spacing-l);
			margin-bottom: var(--spacing-m);
		}
	}

	div {
		margin-top: var(--spacing-l);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-l);
	}
	button {
		all: unset;
		padding: var(--spacing-m);
		cursor: pointer;
		border-radius: var(--border-radius-s);
		transition: all 0.2s ease-in-out;
		font-size: var(--font-size-b1);
		max-width: 140px;
		text-align: center;
	}

	.enable-btn {
		background-color: var(--color-success);
		color: var(--color-text-on-primary);
		&:hover {
			background-color: color-mix(in srgb, var(--color-success) 90%, black);
		}
		&:active {
			transform: scale(0.99);
		}
	}
	.disable-btn {
		background-color: var(--color-error);
		color: var(--color-text-on-primary);
		&:hover {
			background-color: color-mix(in srgb, var(--color-error) 90%, black);
		}
		&:active {
			transform: scale(0.99);
		}
	}
</style>
