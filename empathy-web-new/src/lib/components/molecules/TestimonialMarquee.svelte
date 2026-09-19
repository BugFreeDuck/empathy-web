<script lang="ts">
	import TestimonialCard from './TestimonialCard.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { i18n } from '$i18n';

	const track = $derived([...i18n.m.about.testimonials, ...i18n.m.about.testimonials]);
	const count = $derived(i18n.m.about.testimonials.length);
</script>

<div
	use:reveal={{ from: 'fade', delay: 80 }}
	class="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
>
	<ul class="anim-marquee flex w-max gap-5 py-2">
		{#each track as item, index (index)}
			<li aria-hidden={index >= count}>
				<TestimonialCard {...item} />
			</li>
		{/each}
	</ul>
</div>
