<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import GroupCard from '$molecules/GroupCard.svelte';
	import PhotoFrame from '$molecules/PhotoFrame.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { scheduleByGroup } from '$data/schedule';
	import { i18n } from '$i18n';
	import { registrationUI } from '$lib/stores/registration.svelte';
</script>

<section id="tvarkarastis" class="relative isolate overflow-hidden bg-sand-100 py-16 lg:py-24">
	<Glow class="right-[-10rem] bottom-0 size-[30rem]" color="var(--color-ember-200)" opacity={0.5} />

	<div class="mx-auto max-w-7xl px-6 lg:px-10">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
			<div class="flex flex-col gap-5">
				<SectionIntro
					eyebrow={i18n.m.schedule.eyebrow}
					title={i18n.m.schedule.title}
					from="left"
				/>

				<PhotoFrame
					slug="group-stairs"
					ratio="aspect-[3/4]"
					speed={0.12}
					delay={120}
					from="left"
					sizes="(min-width: 1024px) 20rem, 92vw"
					class="hidden w-full max-w-[20rem] lg:block"
				/>
			</div>

			<div class="flex min-w-0 flex-col">
				{#each scheduleByGroup as entry, index (entry.group.id)}
					<GroupCard {entry} delay={index * 80} />
				{/each}

				<div
					use:reveal={{ delay: 160, from: 'scale' }}
					class="mt-5 flex flex-col gap-3 rounded-2xl border border-sand-300 bg-sand-50 p-4 sm:p-5"
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
		</div>
	</div>
</section>
