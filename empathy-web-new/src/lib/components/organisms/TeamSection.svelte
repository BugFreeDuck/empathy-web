<script lang="ts">
	import PhotoFrame from '$molecules/PhotoFrame.svelte';
	import SectionIntro from '$molecules/SectionIntro.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { teachers } from '$data/team';
	import { i18n } from '$i18n';
</script>

<section id="komanda" class="relative isolate overflow-hidden bg-sand-300 py-14 lg:py-20">
	<div class="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-10">
		<SectionIntro
			eyebrow={i18n.m.team.eyebrow}
			title={i18n.m.team.title}
			size="md"
			from="left"
		/>

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
	</div>
</section>
