<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$data/site';
	import type { Plan } from '$data/pricing';

	interface Props {
		plan: Plan;
		delay?: number;
	}

	let { plan, delay = 0 }: Props = $props();
</script>

<article
	use:reveal={{ delay, from: 'scale' }}
	class="group relative flex flex-col rounded-[1.75rem] p-8 transition duration-500 ease-[var(--ease-soft)] hover:-translate-y-2
		{plan.featured
		? 'price-card--featured shadow-lg shadow-ember-400/20'
		: 'border border-sand-300 bg-sand-50 shadow-sm hover:shadow-xl hover:shadow-ember-400/15'}"
>
	{#if plan.featured}
		<span
			class="absolute -top-3 left-8 rounded-full border border-ember-300/80 bg-sand-50 px-4 py-1 text-[0.65rem] tracking-[0.2em] text-ember-600 uppercase"
		>
			Populiariausia
		</span>
	{/if}

	<h3 class="font-display text-2xl text-bark-900">{plan.name}</h3>

	<p class="mt-6 flex items-baseline gap-2">
		<span class="font-display text-6xl leading-none text-bark-900">{plan.price}</span>
		<span class="text-sm text-bark-600">{plan.unit}</span>
	</p>

	<p class="mt-4 text-sm leading-relaxed text-bark-600">{plan.summary}</p>

	<ul class="mt-8 flex flex-col gap-3 text-sm">
		{#each plan.perks as perk (perk)}
			<li class="flex items-start gap-3">
				<span aria-hidden="true" class="mt-2 size-1.5 shrink-0 rounded-full bg-ember-400"></span>
				<span class="text-bark-600">{perk}</span>
			</li>
		{/each}
	</ul>

	<div class="mt-10 pt-2">
		<Button href={site.registrationUrl} external variant={plan.featured ? 'solid' : 'outline'} class="w-full">
			Registruotis
		</Button>
	</div>
</article>

<style>
	.price-card--featured {
		border: 2px solid transparent;
		background:
			linear-gradient(var(--color-sand-50), var(--color-sand-50)) padding-box,
			var(--gradient-sunset) border-box;
	}
</style>
