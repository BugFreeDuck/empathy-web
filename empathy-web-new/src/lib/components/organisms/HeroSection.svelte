<script lang="ts">
	import Glow from '$atoms/Glow.svelte';
	import HeroVideo from '$atoms/HeroVideo.svelte';
	import { i18n } from '$i18n';
	import { scrollToSection } from '$lib/utils/scroll';
</script>

<section
	id="top"
	class="bg-dawn relative isolate flex h-[100svh] min-h-[100svh] flex-col overflow-hidden"
>
	<div class="absolute inset-0 -z-10">
		<div class="enter-fade absolute inset-0" style="--enter-delay: 80ms">
			<div class="hero-photo absolute inset-0">
				<HeroVideo />
			</div>
		</div>
		<div class="hero-scrim absolute inset-0" aria-hidden="true"></div>
	</div>

	<Glow
		class="top-[52%] right-[6%] hidden h-[18rem] w-[42rem] -translate-y-1/2 md:block"
		color="var(--color-ember-300)"
		opacity={0.12}
	/>
	<Glow
		class="bottom-[-14rem] left-[-8rem] size-[30rem]"
		color="var(--color-ember-200)"
		opacity={0.35}
	/>

	<div
		class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-28 pb-8 text-center md:pt-36"
	>
		<h1
			class="enter-rise font-display text-[clamp(1.85rem,5.5vw,3.75rem)] leading-[1.05] tracking-[0.06em] text-balance text-sunset uppercase"
			style="--enter-delay: 200ms"
		>
			{i18n.m.hero.title}
		</h1>

		<p
			class="enter-rise mt-5 max-w-xl text-base leading-relaxed text-bark-600 md:mt-6 md:text-lg"
			style="--enter-delay: 320ms"
		>
			{i18n.m.hero.lead}
		</p>
	</div>

	<a
		href="#apie"
		onclick={(e) => {
			e.preventDefault();
			scrollToSection('apie');
		}}
		class="enter-fade absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-3 text-[0.6rem] tracking-[0.25em] text-bark-400 uppercase md:bottom-8"
		style="--enter-delay: 520ms"
	>
		{i18n.m.hero.scroll}
		<span class="relative h-10 w-px overflow-hidden bg-sand-300">
			<span class="absolute inset-x-0 top-1/4 h-5 bg-sunset"></span>
		</span>
	</a>
</section>

<style>
	.hero-photo {
		inset: 0;
		width: 100%;
		height: 100%;
	}

	.hero-photo :global(video) {
		object-position: center center;
	}

	.hero-scrim {
		background:
			radial-gradient(
				ellipse 75% 45% at 50% 18%,
				color-mix(in srgb, var(--color-hero-wash) 78%, transparent) 0%,
				color-mix(in srgb, var(--color-hero-wash) 32%, transparent) 50%,
				transparent 72%
			),
			linear-gradient(
				to top,
				color-mix(in srgb, var(--color-hero-wash) 40%, transparent) 0%,
				transparent 18%
			),
			linear-gradient(
				to bottom,
				color-mix(in srgb, var(--color-hero-wash) 35%, transparent) 0%,
				transparent 22%
			);
	}
</style>
