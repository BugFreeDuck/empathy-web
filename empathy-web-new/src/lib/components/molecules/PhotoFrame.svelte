<script lang="ts">
	import Photo from '$atoms/Photo.svelte';
	import { reveal, type RevealFrom } from '$lib/actions/reveal';
	import type { PhotoSlug } from '$data/photos';

	interface Props {
		slug: PhotoSlug;
		/** Aspect ratio utility, e.g. `aspect-[4/5]`. */
		ratio?: string;
		sizes?: string;
		delay?: number;
		position?: string;
		from?: RevealFrom;
		class?: string;
	}

	let {
		slug,
		ratio = 'aspect-[4/5]',
		sizes = '(min-width: 768px) 45vw, 100vw',
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
	<div class="absolute inset-0">
		<Photo {slug} {sizes} {position} />
	</div>
</figure>
