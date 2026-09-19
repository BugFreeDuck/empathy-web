<script lang="ts">
	import Photo from '$atoms/Photo.svelte';
	import { parallax } from '$lib/actions/parallax';
	import { reveal, type RevealFrom } from '$lib/actions/reveal';
	import type { PhotoSlug } from '$data/photos';

	interface Props {
		slug: PhotoSlug;
		/** Aspect ratio utility, e.g. `aspect-[4/5]`. */
		ratio?: string;
		sizes?: string;
		speed?: number;
		/** Share scroll offset with siblings inside `[data-parallax-group]`. */
		group?: boolean;
		delay?: number;
		position?: string;
		from?: RevealFrom;
		class?: string;
	}

	let {
		slug,
		ratio = 'aspect-[4/5]',
		sizes = '(min-width: 768px) 45vw, 100vw',
		speed = 0.14,
		group = false,
		delay = 0,
		position = 'center',
		from = 'up',
		class: className = ''
	}: Props = $props();
</script>

<figure
	use:reveal={{ delay, from }}
	class="relative overflow-hidden rounded-[1.75rem] bg-sand-200 {ratio} {className}"
>
	{#if speed > 0}
		<div class="parallax absolute inset-0" use:parallax={{ speed, group }}>
			<Photo {slug} {sizes} {position} />
		</div>
	{:else}
		<div class="absolute inset-0">
			<Photo {slug} {sizes} {position} />
		</div>
	{/if}
</figure>
