<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { absoluteLocaleUrl } from '$lib/seo/urls';
	import { defaultLocale, resolvePreferredLocale } from '$i18n';

	const fallbackHref = resolve(`/${defaultLocale}/`);
	const canonicalLt = absoluteLocaleUrl(defaultLocale);

	if (browser) {
		const target = resolve(`/${resolvePreferredLocale()}/`);
		void goto(target, { replaceState: true, noScroll: true });
	}
</script>

<svelte:head>
	<meta name="robots" content="noindex, follow" />
	<link rel="canonical" href={canonicalLt} />
</svelte:head>

<main class="flex min-h-dvh items-center justify-center bg-sand-50 px-6">
	<p class="font-display text-bark-900">
		<a href={fallbackHref} class="underline decoration-ember-400 underline-offset-4">Empathy</a>
	</p>
</main>
