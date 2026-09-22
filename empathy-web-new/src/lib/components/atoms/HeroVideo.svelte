<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	let videoEl = $state<HTMLVideoElement | null>(null);

	onMount(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
		const apply = () => {
			if (!videoEl) return;
			if (reduce.matches) {
				videoEl.pause();
				videoEl.removeAttribute('autoplay');
			} else {
				videoEl.play().catch(() => {
					/* Autoplay may be blocked; poster remains visible. */
				});
			}
		};
		apply();
		reduce.addEventListener('change', apply);
		return () => reduce.removeEventListener('change', apply);
	});
</script>

<video
	bind:this={videoEl}
	class="h-full w-full object-cover {className}"
	poster="{base}/videos/hero-poster.webp"
	autoplay
	muted
	loop
	playsinline
	preload="metadata"
	aria-hidden="true"
	disablepictureinpicture
	tabindex="-1"
>
	<source src="{base}/videos/hero.mp4" type="video/mp4" />
	<source src="{base}/videos/hero.webm" type="video/webm" />
</video>
