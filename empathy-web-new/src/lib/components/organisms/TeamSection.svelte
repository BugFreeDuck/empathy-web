<script lang="ts">
	import Eyebrow from '$atoms/Eyebrow.svelte';
	import Heading from '$atoms/Heading.svelte';
	import PhotoFrame from '$molecules/PhotoFrame.svelte';
	import TestimonialMarquee from '$molecules/TestimonialMarquee.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { teachers } from '$data/team';
	import { i18n } from '$i18n';
</script>

<section id="komanda" class="relative isolate overflow-hidden bg-sand-100 py-14 lg:py-20">
	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-10">
		<div use:reveal={{ y: '1rem', from: 'left' }}>
			<Eyebrow navHeading>{i18n.m.team.eyebrow}</Eyebrow>
		</div>

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
					<Eyebrow>{i18n.m.team.founder.eyebrow}</Eyebrow>
				</div>

				<div use:reveal={{ delay: 90, from: 'right' }}>
					<Heading size="md">{i18n.m.team.founder.name}</Heading>
				</div>

				<blockquote
					use:reveal={{ delay: 160, from: 'up', y: '1.25rem' }}
					class="border-l-2 border-ember-400 pl-6 font-display text-2xl leading-snug text-balance text-bark-900 italic"
				>
					{i18n.m.team.founder.quote}
				</blockquote>

				{#each i18n.m.team.founder.paragraphs as paragraph, index (index)}
					<p
						use:reveal={{ delay: 240 + index * 90, from: 'fade' }}
						class="leading-relaxed text-bark-600"
					>
						{paragraph}
					</p>
				{/each}
			</div>
		</div>

		<div use:reveal={{ delay: 100, from: 'left', y: '1.5rem' }}>
			<Heading size="md" class="max-w-2xl">{i18n.m.team.title}</Heading>
		</div>

		<ul class="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
			{#each teachers as teacher, index (teacher.id)}
				{@const copy = i18n.m.team.members[teacher.id]}
				<li class="flex flex-col gap-5">
					<PhotoFrame
						slug={teacher.slug}
						ratio="aspect-[3/4]"
						delay={index * 100}
						from="up"
						sizes="(min-width: 1024px) 360px, (min-width: 640px) 30vw, 90vw"
						position={teacher.position ?? 'center top'}
					/>

					<div use:reveal={{ delay: 80 + index * 100, from: 'fade' }} class="flex flex-col gap-2">
						<h3 class="font-display text-2xl text-bark-900">{copy.name}</h3>
						<p class="text-sm leading-relaxed text-bark-600">{copy.bio}</p>
					</div>
				</li>
			{/each}
		</ul>

		<div class="flex flex-col gap-10">
			<div use:reveal={{ y: '1rem', from: 'left' }}>
				<Eyebrow>{i18n.m.about.testimonialsEyebrow}</Eyebrow>
			</div>
			<TestimonialMarquee />
		</div>
	</div>
</section>
