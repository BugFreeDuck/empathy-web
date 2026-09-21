<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { PlanBase } from '$data/pricing';
	import { i18n } from '$i18n';
	import { registrationUI } from '$lib/stores/registration.svelte';
	import { scrollToSection } from '$lib/utils/scroll';

	interface PlanView extends PlanBase {
		name: string;
		unit: string;
		summary: string;
	}

	interface Props {
		plan: PlanView;
		delay?: number;
	}

	let { plan, delay = 0 }: Props = $props();

	const isPrivate = $derived(plan.id === 'private');
</script>

<article
	use:reveal={{ delay, from: 'scale' }}
	class="price-card relative flex flex-col rounded-[1.75rem] border border-sand-300 bg-sand-50 p-8 shadow-sm"
>
	<h3 class="font-display text-2xl text-bark-900">{plan.name}</h3>

	<p class="mt-6 flex items-baseline gap-2">
		<span class="font-display text-6xl leading-none text-bark-900">{plan.price}</span>
		<span class="text-sm text-bark-600">{plan.unit}</span>
	</p>

	<p class="mt-4 text-sm leading-relaxed text-bark-600">{plan.summary}</p>

	<div class="mt-10 pt-2">
		<Button
			onclick={() => (isPrivate ? scrollToSection('kontaktai') : registrationUI.show())}
			variant="outline"
			class="w-full"
		>
			{isPrivate ? i18n.m.pricing.contact : i18n.m.pricing.register}
		</Button>
	</div>
</article>

<style>
	.price-card::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		box-shadow: 0 22px 48px -10px var(--color-ember-400);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.5s ease-in-out;
	}

	.price-card:hover::after {
		opacity: 0.55;
	}
</style>
