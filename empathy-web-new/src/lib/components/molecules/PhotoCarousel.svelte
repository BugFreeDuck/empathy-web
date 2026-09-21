<script lang="ts">
	import Photo from '$atoms/Photo.svelte';
	import { marquee } from '$lib/actions/marquee';
	import { reveal } from '$lib/actions/reveal';
	import { aboutCarousel, photoFiles } from '$data/photos';

	const count = aboutCarousel.length;
	const track = [...aboutCarousel, ...aboutCarousel];
</script>

<div
	use:reveal={{ from: 'fade', delay: 60 }}
	class="photo-carousel relative w-full overflow-hidden
		[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
	role="region"
	aria-label="Photo gallery"
>
	<ul
		use:marquee
		class="flex w-max items-stretch gap-4 py-1 md:gap-5"
	>
		{#each track as slug, index (index)}
			{@const aspect = photoFiles[slug].aspect}
			<li
				class="relative h-64 shrink-0 overflow-hidden rounded-[1.5rem] bg-sand-200 sm:h-72 md:h-80 lg:h-[22rem]"
				style:aspect-ratio={aspect}
				aria-hidden={index >= count}
			>
				<Photo {slug} sizes="(min-width: 1024px) 360px, 55vw" />
			</li>
		{/each}
	</ul>
</div>

<style>
	.photo-carousel :global(ul.is-dragging) {
		cursor: grabbing;
	}

	@media (prefers-reduced-motion: reduce) {
		.photo-carousel {
			overflow-x: auto;
			overscroll-behavior-x: contain;
			-webkit-overflow-scrolling: touch;
			scrollbar-width: none;
		}

		.photo-carousel::-webkit-scrollbar {
			display: none;
		}
	}
</style>
