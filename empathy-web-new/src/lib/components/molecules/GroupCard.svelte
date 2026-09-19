<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { weekdayMarks, type GroupSchedule } from '$data/schedule';
	import { i18n } from '$i18n';

	interface Props {
		entry: GroupSchedule;
		delay?: number;
	}

	let { entry, delay = 0 }: Props = $props();

	const { group, sessions } = $derived(entry);
	const activeDays = $derived(new Set(sessions.map((s) => s.dayShort)));
	const time = $derived(sessions[0]?.time ?? '');
	const teacher = $derived(sessions[0]?.teacher ?? '');
	const age = $derived(i18n.m.schedule.groups[group.id].age);
	const dayLabels = $derived(
		sessions.map((s) => i18n.m.schedule.dayNames[s.dayShort as keyof typeof i18n.m.schedule.dayNames]).join(' · ')
	);
</script>

<article
	use:reveal={{ delay, from: 'right', x: '1.75rem' }}
	class="grid gap-2.5 border-t border-sand-300 py-2.5 sm:grid-cols-[7.5rem_1fr_auto] sm:items-center sm:gap-3 sm:py-3"
>
	<div class="flex flex-col gap-0.5">
		<div class="flex items-baseline gap-2.5">
			<span class="size-2 shrink-0 rounded-full {group.dot}" aria-hidden="true"></span>
			<h3 class="font-display text-xl text-bark-900">{group.name}</h3>
		</div>
		<p class="text-[0.65rem] tracking-[0.14em] text-bark-400 uppercase">{age}</p>
	</div>

	<ul class="flex items-center gap-1.5 sm:justify-center" aria-label="{i18n.m.schedule.daysAria}: {dayLabels}">
		{#each weekdayMarks as mark (mark)}
			{@const on = activeDays.has(mark)}
			<li
				class="flex size-7 items-center justify-center rounded-full text-[0.65rem] tracking-wide uppercase
					{on
					? 'bg-ember-500 text-sand-50'
					: 'bg-sand-200/80 text-bark-400'}"
				aria-hidden={!on}
			>
				{mark}
			</li>
		{/each}
	</ul>

	<div class="flex flex-col sm:items-end sm:text-right">
		<p class="font-display text-xl text-bark-900 whitespace-nowrap">{time}</p>
		<p class="text-[0.65rem] tracking-[0.1em] text-bark-400">{teacher}</p>
	</div>
</article>
