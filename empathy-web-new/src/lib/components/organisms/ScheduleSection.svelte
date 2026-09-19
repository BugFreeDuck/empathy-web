<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import DayCard from '$molecules/DayCard.svelte';
	import PhotoFrame from '$molecules/PhotoFrame.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { groups, scheduleNotes, week } from '$data/schedule';
	import { site } from '$data/site';
</script>

<section id="tvarkarastis" class="relative isolate overflow-hidden bg-sand-100 py-28 lg:py-40">
	<Glow class="right-[-10rem] bottom-0 size-[30rem]" color="var(--color-ember-200)" opacity={0.5} />

	<div class="mx-auto max-w-7xl px-6 lg:px-10">
		<div class="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
			<div class="flex flex-col gap-10">
				<SectionIntro
					eyebrow="Tvarkaraštis"
					title="Savaitė, kurioje visada yra vieta tavo grupei"
					lead="Užsiėmimai vyksta pirmadieniais–ketvirtadieniais. Pasirink savo amžiaus grupę ir ateik — pirma pamoka nemokama."
					from="left"
				/>

				<ul class="flex flex-wrap gap-x-6 gap-y-3">
					{#each Object.values(groups) as group, index (group.id)}
						<li
							use:reveal={{ delay: 180 + index * 70, from: 'fade' }}
							class="flex items-center gap-2.5 text-xs tracking-[0.14em] text-bark-600 uppercase"
						>
							<span class="size-2 rounded-full {group.dot}" aria-hidden="true"></span>
							{group.name}
							<span class="text-bark-400 normal-case">{group.age}</span>
						</li>
					{/each}
				</ul>

				<PhotoFrame
					slug="group-reach"
					ratio="aspect-[3/2]"
					speed={0.14}
					delay={120}
					from="left"
					sizes="(min-width: 1024px) 34vw, 92vw"
					class="hidden lg:block"
				/>
			</div>

			<div class="flex flex-col">
				{#each week as day, index (day.name)}
					<DayCard {day} delay={index * 100} />
				{/each}

				<div
					use:reveal={{ delay: 160, from: 'scale' }}
					class="mt-10 flex flex-col gap-6 rounded-[1.75rem] border border-sand-300 bg-sand-50 p-8"
				>
					<ul class="flex flex-col gap-3">
						{#each scheduleNotes as note (note)}
							<li class="flex items-start gap-3 text-sm leading-relaxed text-bark-600">
								<span class="mt-2 size-1.5 shrink-0 rounded-full bg-ember-400" aria-hidden="true"
								></span>
								{note}
							</li>
						{/each}
					</ul>

					<Button href={site.registrationUrl} external class="self-start">
						Rezervuoti vietą
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
