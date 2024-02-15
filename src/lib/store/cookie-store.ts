import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type CookieStatus = 'accepted' | 'declined' | 'not-answered';

export const cookieStatus = writable<CookieStatus>(
	((browser && localStorage.getItem('cookieConsent')) || 'not-answered') as CookieStatus
);

cookieStatus.subscribe((value) => {
	if (value === 'accepted' && browser) {
		localStorage.setItem('cookieConsent', 'accepted');
	}
});
