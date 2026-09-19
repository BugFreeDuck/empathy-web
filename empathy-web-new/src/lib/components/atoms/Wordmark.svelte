<script lang="ts">
	import { site } from '$data/site';
	import { scrollToSection } from '$lib/utils/scroll';

	interface Props {
		showTagline?: boolean;
		class?: string;
	}

	let { showTagline = false, class: className = '' }: Props = $props();
</script>

<a
	href="#top"
	onclick={(e) => {
		e.preventDefault();
		scrollToSection('top');
	}}
	class="group inline-flex flex-col justify-center leading-none {className}"
	aria-label={site.name}
>
	<span class="font-display text-2xl lowercase transition-colors group-hover:text-ember-600">
		{site.name}
	</span>
	<span
		class="tagline-clip block overflow-hidden"
		class:tagline-clip--open={showTagline}
		aria-hidden={!showTagline}
	>
		<span class="tagline-text block text-[0.6rem] tracking-[0.22em] text-bark-400 uppercase">
			{site.tagline}
		</span>
	</span>
</a>

<style>
	/*
	  Clip height collapses when closed so the wordmark’s layout box is only the
	  name — header `items-center` then keeps “empathy” vertically centred.
	  Height uses a fixed rem (not 1fr) so it stays smooth with the slide.
	*/
	.tagline-clip {
		height: 0;
		margin-top: 0;
		transform: translateZ(0);
		transition:
			height 0.5s var(--ease-soft),
			margin-top 0.5s var(--ease-soft);
	}

	.tagline-clip--open {
		height: 0.7rem;
		margin-top: 0.25rem;
	}

	.tagline-text {
		transform: translate3d(0, -110%, 0);
		opacity: 0;
		transition:
			transform 0.5s var(--ease-soft),
			opacity 0.4s var(--ease-soft);
		will-change: transform, opacity;
	}

	.tagline-clip--open .tagline-text {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}

	@media (prefers-reduced-motion: reduce) {
		.tagline-clip,
		.tagline-text {
			transition: none;
		}
	}
</style>
