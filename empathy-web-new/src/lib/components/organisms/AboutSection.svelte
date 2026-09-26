<script lang="ts">
	import Glow from '$atoms/Glow.svelte';
	import PhotoCarousel from '$molecules/PhotoCarousel.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { i18n } from '$i18n';
</script>

<section id="apie" class="relative isolate overflow-hidden bg-sand-50 py-14 lg:py-20">
	<Glow class="top-24 left-[-12rem] size-[28rem]" color="var(--color-ember-200)" opacity={0.45} />

	<div class="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
		<div class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
			<SectionIntro eyebrow={i18n.m.about.eyebrow} title={i18n.m.about.title} from="left" />

			<div class="flex flex-col gap-6">
				{#each i18n.m.about.paragraphs as paragraph, index (index)}
					<p
						use:reveal={{ delay: 80 + index * 100, from: 'right', x: '1.5rem' }}
						class="text-lg leading-relaxed text-bark-600 first:text-xl first:text-bark-900"
					>
						{paragraph}
					</p>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-24">
		<PhotoCarousel />
	</div>

	<div class="mx-auto mt-24 flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
		<ul class="grid gap-10 sm:grid-cols-3">
			{#each i18n.m.about.values as value, index (value.title)}
				<li
					use:reveal={{ delay: index * 120, from: 'up', y: '2.5rem' }}
					class="flex items-start gap-3"
				>
					<span
						class="mt-[0.7rem] size-2 shrink-0 rounded-full border border-ember-500"
						aria-hidden="true"
					></span>
					<div class="flex min-w-0 flex-col gap-4">
						<h3 class="font-display text-2xl text-bark-900">{value.title}</h3>
						<p class="text-base leading-relaxed text-bark-600">{value.body}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
