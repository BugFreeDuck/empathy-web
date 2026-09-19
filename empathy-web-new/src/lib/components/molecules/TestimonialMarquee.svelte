<script lang="ts">
	import TestimonialCard from './TestimonialCard.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { testimonials } from '$data/about';

	// Rendered twice so the -50% keyframe loops without a visible seam.
	const track = [...testimonials, ...testimonials];
</script>

<div
	use:reveal={{ from: 'fade', delay: 80 }}
	class="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
>
	<ul class="anim-marquee flex w-max gap-5 py-2">
		{#each track as item, index (index)}
			<li aria-hidden={index >= testimonials.length}>
				<TestimonialCard {...item} />
			</li>
		{/each}
	</ul>
</div>
