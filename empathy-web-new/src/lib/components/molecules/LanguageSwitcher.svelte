<script lang="ts">
	import { i18n, localeMeta, type Locale } from '$i18n';

	interface Props {
		/** Compact inline switcher for the header. */
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<div
	class="flex items-center gap-1 text-[0.65rem] tracking-[0.14em] text-bark-400 uppercase {className}"
	role="group"
	aria-label={i18n.m.nav.language}
>
	{#each i18n.locales as code, index (code)}
		{#if index > 0}
			<span class="text-sand-300" aria-hidden="true">/</span>
		{/if}
		<button
			type="button"
			onclick={() => i18n.setLocale(code as Locale)}
			aria-pressed={i18n.locale === code}
			class="rounded px-1.5 py-0.5 transition-colors
				{i18n.locale === code
				? 'text-bark-900'
				: 'hover:text-ember-600'}"
		>
			{localeMeta[code].label}
		</button>
	{/each}
</div>
