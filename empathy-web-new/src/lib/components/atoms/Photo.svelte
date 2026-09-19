<script lang="ts">
	import { base } from '$app/paths';
	import { photoAlt, photoFiles, type PhotoSlug } from '$data/photos';

	interface Props {
		slug: PhotoSlug;
		/** Overrides the default alt text from the photo manifest. */
		alt?: string;
		sizes?: string;
		/** Skips lazy loading — use for the hero only. */
		priority?: boolean;
		position?: string;
		class?: string;
	}

	let {
		slug,
		alt = photoAlt[slug],
		sizes = '100vw',
		priority = false,
		position = 'center',
		class: className = ''
	}: Props = $props();

	const meta = $derived(photoFiles[slug]);
	const largest = $derived(meta.widths[meta.widths.length - 1]);
	const srcset = $derived(meta.widths.map((w) => `${base}/photos/${slug}-${w}.webp ${w}w`).join(', '));
</script>

<img
	src="{base}/photos/{slug}-{largest}.webp"
	{srcset}
	{sizes}
	{alt}
	width={largest}
	height={Math.round(largest / meta.aspect)}
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : 'auto'}
	decoding="async"
	style:object-position={position}
	class="h-full w-full object-cover {className}"
/>
