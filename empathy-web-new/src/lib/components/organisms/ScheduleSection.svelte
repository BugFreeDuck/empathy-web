<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import GroupCard from '$molecules/GroupCard.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { scheduleByGroup } from '$data/schedule';
	import { i18n } from '$i18n';
	import { registrationUI } from '$lib/stores/registration.svelte';
</script>

<section id="tvarkarastis" class="relative isolate overflow-hidden py-14 lg:py-20">
	<Glow class="right-[-10rem] bottom-0 size-[30rem]" color="var(--color-ember-200)" opacity={0.5} />

	<div
		class="mx-auto grid max-w-7xl gap-10 px-6
			lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-24 lg:gap-y-6 lg:px-10"
	>
		<div class="order-1 lg:col-start-1 lg:row-start-1">
			<SectionIntro
				eyebrow={i18n.m.schedule.eyebrow}
				title={i18n.m.schedule.title}
				size="md"
				from="left"
			/>
		</div>

		<div
			class="order-2 min-w-0 divide-y divide-sand-300 border-y border-sand-300 lg:col-start-2 lg:row-span-2"
		>
			{#each scheduleByGroup as entry, index (entry.group.id)}
				<GroupCard {entry} delay={index * 80} />
			{/each}
		</div>

		<div
			use:reveal={{ delay: 160, from: 'scale' }}
			class="order-3 flex flex-col gap-3 rounded-2xl border border-sand-300 bg-sand-50 p-4 sm:p-5
				lg:col-start-1 lg:row-start-2"
		>
			<ul class="flex flex-col gap-1.5">
				{#each i18n.m.schedule.notes as note (note)}
					<li class="flex items-start gap-3 text-sm leading-snug text-bark-600">
						<span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-ember-400" aria-hidden="true"
						></span>
						{note}
					</li>
				{/each}
			</ul>

			<Button onclick={() => registrationUI.show()} class="self-start">
				{i18n.m.schedule.cta}
			</Button>
		</div>
	</div>
</section>
