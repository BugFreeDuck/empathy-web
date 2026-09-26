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
		sessions
			.map((s) => i18n.m.schedule.dayNames[s.dayShort as keyof typeof i18n.m.schedule.dayNames])
			.join(' · ')
	);
</script>

<article
	use:reveal={{ delay, from: 'right', x: '1.75rem' }}
	class="grid grid-cols-3 items-center gap-x-2 gap-y-1 py-3.5
		sm:grid-cols-[11rem_minmax(0,1fr)_8.75rem] sm:gap-4"
>
	<div class="flex min-w-0 items-start gap-2.5">
		<span class="mt-[0.55rem] size-2 shrink-0 rounded-full {group.dot}" aria-hidden="true"></span>
		<div class="min-w-0">
			<h3 class="font-display text-lg leading-snug text-balance break-words text-bark-900 sm:text-xl sm:leading-tight">
				{group.name}
			</h3>
			<p class="mt-0.5 text-[0.65rem] leading-snug tracking-[0.14em] break-words whitespace-pre-line text-bark-400 uppercase">
				{age}
			</p>
		</div>
	</div>

	<ul
		class="flex items-center justify-center justify-self-center gap-1
			sm:justify-self-auto sm:gap-1.5"
		aria-label="{i18n.m.schedule.daysAria}: {dayLabels}"
	>
		{#each weekdayMarks as mark (mark)}
			{@const on = activeDays.has(mark)}
			<li
				class="flex size-6 shrink-0 items-center justify-center rounded-full text-[0.6rem] tracking-wide uppercase
					sm:size-7 sm:text-[0.65rem]
					{on ? 'bg-ember-500 text-sand-50' : 'bg-sand-200/80 text-bark-400'}"
				aria-hidden={!on}
			>
				{mark}
			</li>
		{/each}
	</ul>

	<div class="flex min-w-0 flex-col items-end justify-self-end text-right sm:justify-self-auto">
		<p class="font-display text-lg leading-tight text-bark-900 tabular-nums whitespace-nowrap sm:text-xl">
			{time}
		</p>
		<p class="max-w-full text-[0.65rem] leading-snug tracking-[0.1em] break-words text-bark-400">
			{teacher}
		</p>
	</div>
</article>
