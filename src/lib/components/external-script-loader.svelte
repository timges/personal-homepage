<script>
	import { cookieStatus } from '$lib/store/cookie-store';
</script>

<svelte:head>
	{#if $cookieStatus === 'accepted'}
		<script
			async
			src="https://www.google.com/recaptcha/api.js?render=6LdrcHApAAAAAL_j-HWDi5isOi1zUb-X85HbTnoB"
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
