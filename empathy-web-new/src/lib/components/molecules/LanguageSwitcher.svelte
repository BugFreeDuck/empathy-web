<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { i18n, localeMeta, type Locale } from '$i18n';

	interface Props {
		/** Compact inline switcher for the header. */
		class?: string;
		onDark?: boolean;
	}

	let { class: className = '', onDark = false }: Props = $props();

	/** Restore exact Y after locale navigation (SvelteKit/hash can still nudge scroll). */
	let pendingScrollY: number | null = null;

	afterNavigate(() => {
		if (pendingScrollY == null) return;
		const y = pendingScrollY;
		pendingScrollY = null;
		requestAnimationFrame(() => {
			window.scrollTo({ top: y, left: 0, behavior: 'auto' });
		});
	});

	function hrefFor(code: Locale): string {
		return resolve(`/${code}/`) + page.url.hash;
	}

	function onLocaleClick(code: Locale) {
		if (code === i18n.locale) return;
		pendingScrollY = window.scrollY;
	}
</script>

<div
	class="flex items-center gap-1 text-[0.65rem] tracking-[0.14em] uppercase {className}
		{onDark ? 'text-sand-400' : 'text-bark-400'}"
	role="navigation"
	aria-label={i18n.m.nav.language}
>
	{#each i18n.locales as code, index (code)}
		{#if index > 0}
			<span class="{onDark ? 'text-sand-500' : 'text-sand-300'}" aria-hidden="true">/</span>
		{/if}
		<a
			href={hrefFor(code as Locale)}
			hreflang={code}
			data-sveltekit-noscroll
			aria-current={i18n.locale === code ? 'page' : undefined}
			onclick={() => onLocaleClick(code as Locale)}
			class="rounded px-1.5 py-0.5 transition-colors
				{i18n.locale === code
				? onDark
					? 'text-sand-50'
					: 'text-bark-900'
				: onDark
					? 'hover:text-sand-50'
					: 'hover:text-ember-600'}"
		>
			{localeMeta[code].label}
		</a>
	{/each}
</div>
