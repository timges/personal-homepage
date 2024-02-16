<script>
	import { cookieStatus } from '$lib/store/cookie-store';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';
</script>

<svelte:head>
	{#if $cookieStatus === 'accepted'}
		<script
			async
			src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_RECAPTCHA_SITE_KEY}`}
		></script>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-MV7DLMT34P"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-MV7DLMT34P');
		</script>
	{/if}
</svelte:head>
