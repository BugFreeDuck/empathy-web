<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { groups, type Day } from '$data/schedule';

	interface Props {
		day: Day;
		delay?: number;
	}

	let { day, delay = 0 }: Props = $props();
</script>

<article
	use:reveal={{ delay, from: 'right', x: '1.75rem' }}
	class="grid gap-5 border-t border-sand-300 py-7 sm:grid-cols-[10rem_1fr] sm:items-center"
>
	<div class="flex items-baseline gap-3">
		<span class="font-display text-2xl text-ember-500">{day.short}</span>
		<h3 class="text-sm tracking-[0.18em] text-bark-900 uppercase">{day.name}</h3>
	</div>

	<ul class="flex flex-wrap gap-3">
		{#each day.lessons as lesson (lesson.time + lesson.group)}
			{@const group = groups[lesson.group]}
			<li
				class="flex items-center gap-3 rounded-full py-2.5 pr-5 pl-4 transition duration-300 hover:-translate-y-0.5 {group.chip}"
			>
				<span class="font-display text-lg">{lesson.time}</span>
				<span class="h-4 w-px bg-current opacity-25" aria-hidden="true"></span>
				<span class="text-sm tracking-wider uppercase">{group.name}</span>
				<span class="text-xs opacity-70">{group.age}</span>
			</li>
		{/each}
	</ul>
</article>
