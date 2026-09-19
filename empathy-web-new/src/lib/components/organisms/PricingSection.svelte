<script lang="ts">
	import Glow from '$atoms/Glow.svelte';
	import PriceCard from '$molecules/PriceCard.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { planBases } from '$data/pricing';
	import { i18n } from '$i18n';

	const plans = $derived(
		planBases.map((base) => {
			const copy = i18n.m.pricing.plans.find((p) => p.id === base.id)!;
			return {
				...base,
				name: copy.name,
				unit: copy.unit,
				summary: copy.summary,
				perks: copy.perks
			};
		})
	);
</script>

<section id="kainos" class="relative isolate overflow-hidden py-28 lg:py-40">
	<Glow
		class="top-[-6rem] left-1/2 size-[34rem] -translate-x-1/2"
		color="var(--color-ember-200)"
		opacity={0.4}
	/>

	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-10">
		<SectionIntro
			align="center"
			eyebrow={i18n.m.pricing.eyebrow}
			title={i18n.m.pricing.title}
			lead={i18n.m.pricing.lead}
			from="up"
		/>

		<div class="grid gap-6 md:grid-cols-3 md:items-center">
			{#each plans as plan, index (plan.id)}
				<div class={plan.featured ? 'md:-my-6' : ''}>
					<PriceCard {plan} delay={80 + index * 130} />
				</div>
			{/each}
		</div>

		<p use:reveal={{ delay: 180, from: 'fade' }} class="text-center text-sm text-bark-600">
			{i18n.m.pricing.note}
		</p>
	</div>
</section>
