<script lang="ts">
	import Eyebrow from '$atoms/Eyebrow.svelte';
	import Glow from '$atoms/Glow.svelte';
	import Heading from '$atoms/Heading.svelte';
	import PhotoCarousel from '$molecules/PhotoCarousel.svelte';
	import PhotoFrame from '$molecules/PhotoFrame.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import TestimonialMarquee from '$molecules/TestimonialMarquee.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { i18n } from '$i18n';
</script>

<section id="apie" class="relative isolate overflow-hidden py-14 lg:py-20">
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
					class="flex flex-col gap-4"
				>
					<span class="font-display text-sm text-ember-500">0{index + 1}</span>
					<h3 class="font-display text-2xl text-bark-900">{value.title}</h3>
					<p class="text-base leading-relaxed text-bark-600">{value.body}</p>
				</li>
			{/each}
		</ul>

		<div class="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
			<PhotoFrame
				slug="founder"
				ratio="aspect-[4/5]"
				from="left"
				sizes="(min-width: 1024px) 720px, 94vw"
				position="center"
			/>

			<div class="flex flex-col gap-7">
				<div use:reveal={{ y: '1rem', from: 'right' }}>
					<Eyebrow>{i18n.m.about.founder.eyebrow}</Eyebrow>
				</div>

				<div use:reveal={{ delay: 90, from: 'right' }}>
					<Heading size="md">{i18n.m.about.founder.name}</Heading>
				</div>

				<blockquote
					use:reveal={{ delay: 160, from: 'up', y: '1.25rem' }}
					class="border-l-2 border-ember-400 pl-6 font-display text-2xl leading-snug text-balance text-bark-900 italic"
				>
					{i18n.m.about.founder.quote}
				</blockquote>

				{#each i18n.m.about.founder.paragraphs as paragraph, index (index)}
					<p
						use:reveal={{ delay: 240 + index * 90, from: 'fade' }}
						class="leading-relaxed text-bark-600"
					>
						{paragraph}
					</p>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-10">
			<div use:reveal={{ y: '1rem' }} class="flex justify-center">
				<Eyebrow>{i18n.m.about.testimonialsEyebrow}</Eyebrow>
			</div>
			<TestimonialMarquee />
		</div>
	</div>
</section>
