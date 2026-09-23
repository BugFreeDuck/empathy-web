<script lang="ts">
	import { i18n } from '$i18n';
	import { sections } from '$data/site';
	import { scrollToSection } from '$lib/utils/scroll';

	interface Props {
		active?: string;
		orientation?: 'row' | 'column';
		onnavigate?: () => void;
		onselect?: (id: string) => void;
	}

	let { active, orientation = 'row', onnavigate, onselect }: Props = $props();

	let navDelayTimer = 0;

	const labels = $derived({
		apie: i18n.m.nav.about,
		komanda: i18n.m.nav.team,
		darbai: i18n.m.nav.works,
		tvarkarastis: i18n.m.nav.schedule,
		kainos: i18n.m.nav.pricing,
		kontaktai: i18n.m.nav.contact
	});

	function go(event: MouseEvent, id: string) {
		event.preventDefault();
		onselect?.(id);
		onnavigate?.();
		if (navDelayTimer) window.clearTimeout(navDelayTimer);
		// Extra beat after mobile drawer closes so body scroll lock doesn't skew measurements.
		if (onnavigate) {
			navDelayTimer = window.setTimeout(() => scrollToSection(id), 50);
		} else {
			scrollToSection(id);
		}
	}
</script>

<nav
	aria-label={i18n.m.nav.aria}
			class={orientation === 'row' ? 'flex items-center gap-5 lg:gap-8' : 'flex flex-col gap-6'}
>
	{#each sections as section (section.id)}
		<a
			href="#{section.id}"
			onclick={(event) => go(event, section.id)}
			aria-current={active === section.id ? 'true' : undefined}
			class="relative transition-colors hover:text-ember-600
				{orientation === 'row' ? 'text-sm' : 'font-display text-3xl lowercase'}
				{active === section.id ? 'text-ember-600' : 'text-bark-900'}"
		>
			{labels[section.id]}
			{#if orientation === 'row'}
				<span
					aria-hidden="true"
					class="absolute -bottom-1.5 left-0 h-px bg-sunset transition-all duration-500 ease-[var(--ease-soft)]
						{active === section.id ? 'w-full' : 'w-0'}"
				></span>
			{/if}
		</a>
	{/each}
</nav>
