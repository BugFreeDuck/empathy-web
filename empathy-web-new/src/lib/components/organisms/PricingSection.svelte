<script lang="ts">
	import Eyebrow from '$atoms/Eyebrow.svelte';
	import PriceCard from '$molecules/PriceCard.svelte';
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
				summary: copy.summary
			};
		})
	);
</script>

<section id="kainos" class="relative isolate overflow-hidden py-14 lg:py-20">
	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-10">
		<div use:reveal={{ y: '1rem', from: 'left' }}>
			<Eyebrow>{i18n.m.pricing.eyebrow}</Eyebrow>
		</div>

		<div class="mx-auto grid w-full max-w-3xl gap-6 md:grid-cols-2">
			{#each plans as plan, index (plan.id)}
				<PriceCard {plan} delay={80 + index * 130} />
			{/each}
		</div>
	</div>
</section>
