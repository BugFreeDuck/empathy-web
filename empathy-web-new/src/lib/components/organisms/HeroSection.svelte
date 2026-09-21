<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import Icon from '$atoms/Icon.svelte';
	import Photo from '$atoms/Photo.svelte';
	import { i18n } from '$i18n';
	import { registrationUI } from '$lib/stores/registration.svelte';
	import { scrollToSection } from '$lib/utils/scroll';
</script>

<section
	id="top"
	class="bg-dawn relative isolate flex h-[100svh] min-h-[100svh] flex-col overflow-hidden"
>
	<div class="absolute inset-0 -z-10">
		<div class="enter-fade absolute inset-0" style="--enter-delay: 80ms">
			<div class="hero-photo absolute inset-0">
				<Photo slug="hero-wide" priority sizes="(min-width: 768px) 55vw, 100vw" position="center 55%" />
			</div>
		</div>
		<div class="hero-scrim absolute inset-0" aria-hidden="true"></div>
	</div>

	<Glow
		class="top-[52%] right-[6%] hidden h-[18rem] w-[42rem] -translate-y-1/2 md:block"
		color="var(--color-ember-300)"
		opacity={0.4}
	/>
	<Glow
		class="bottom-[-14rem] left-[-8rem] size-[30rem]"
		color="var(--color-ember-200)"
		opacity={0.5}
	/>

	<div
		class="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-24 pb-16 md:pt-32 md:pb-28 lg:px-10"
	>
		<p
			class="enter-fade text-xs tracking-[0.3em] text-ember-700 uppercase"
			style="--enter-delay: 160ms"
		>
			{i18n.m.hero.eyebrow}
		</p>

		<h1
			class="enter-fade mt-5 max-w-4xl font-display text-[clamp(2.35rem,9vw,6.5rem)] leading-[0.95] text-balance text-bark-900 md:mt-7"
			style="--enter-delay: 260ms"
		>
			{i18n.m.hero.titleBefore}
			<span class="hero-accent italic">{i18n.m.hero.titleAccent}</span>
		</h1>

		<div class="enter-fade mt-7 flex flex-wrap gap-3 md:mt-10 md:gap-4" style="--enter-delay: 380ms">
			<Button onclick={() => registrationUI.show()}>
				{i18n.m.hero.ctaPrimary}
				<Icon name="arrow" class="size-4" />
			</Button>
			<Button
				href="#tvarkarastis"
				variant="outline"
				onclick={(e) => {
					e.preventDefault();
					scrollToSection('tvarkarastis');
				}}
			>
				{i18n.m.hero.ctaSecondary}
			</Button>
		</div>
	</div>

	<a
		href="#apie"
		onclick={(e) => {
			e.preventDefault();
			scrollToSection('apie');
		}}
		class="enter-fade absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-3 text-[0.6rem] tracking-[0.25em] text-bark-400 uppercase md:bottom-8"
		style="--enter-delay: 620ms"
	>
		{i18n.m.hero.scroll}
		<span class="relative h-10 w-px overflow-hidden bg-sand-300">
			<span class="absolute inset-x-0 top-1/4 h-5 bg-sunset"></span>
		</span>
	</a>
</section>

<style>
	/*
	 * ABD_8113 is portrait — a full-bleed cover on wide screens over-magnifies
	 * and looks grainy. Keep it as a smaller right-side panel instead.
	 */
	.hero-photo {
		top: 0;
		right: 0;
		left: auto;
		width: 72%;
		height: 100%;
		transform-origin: top center;
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			rgb(0 0 0 / 0.35) 22%,
			rgb(0 0 0 / 0.75) 38%,
			#000 55%
		);
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			rgb(0 0 0 / 0.35) 22%,
			rgb(0 0 0 / 0.75) 38%,
			#000 55%
		);
	}

	.hero-photo :global(img) {
		object-position: center 55%;
	}

	@media (min-width: 768px) {
		.hero-photo {
			width: 58%;
			-webkit-mask-image: linear-gradient(
				to right,
				transparent 0%,
				rgb(0 0 0 / 0.3) 18%,
				rgb(0 0 0 / 0.7) 36%,
				#000 52%
			);
			mask-image: linear-gradient(
				to right,
				transparent 0%,
				rgb(0 0 0 / 0.3) 18%,
				rgb(0 0 0 / 0.7) 36%,
				#000 52%
			);
		}

		.hero-photo :global(img) {
			object-position: center 52%;
		}
	}

	@media (min-width: 1280px) {
		.hero-photo {
			width: 52%;
		}

		.hero-photo :global(img) {
			object-position: center 50%;
		}
	}

	.hero-scrim {
		background:
			linear-gradient(
				to right,
				var(--color-hero-wash) 0%,
				var(--color-hero-wash) 18%,
				color-mix(in srgb, var(--color-hero-wash) 82%, transparent) 32%,
				color-mix(in srgb, var(--color-hero-wash) 48%, transparent) 48%,
				color-mix(in srgb, var(--color-hero-wash) 18%, transparent) 62%,
				transparent 78%
			),
			linear-gradient(
				to right,
				transparent 78%,
				color-mix(in srgb, var(--color-hero-wash) 40%, transparent) 90%,
				var(--color-hero-wash) 100%
			),
			linear-gradient(
				to top,
				var(--color-hero-wash) 0%,
				color-mix(in srgb, var(--color-hero-wash) 55%, transparent) 14%,
				transparent 36%
			),
			linear-gradient(
				to bottom,
				var(--color-hero-wash) 0%,
				color-mix(in srgb, var(--color-hero-wash) 50%, transparent) 10%,
				transparent 28%
			);
	}

	@media (min-width: 768px) {
		.hero-scrim {
			background:
				linear-gradient(
					to right,
					var(--color-hero-wash) 0%,
					var(--color-hero-wash) 28%,
					color-mix(in srgb, var(--color-hero-wash) 88%, transparent) 40%,
					color-mix(in srgb, var(--color-hero-wash) 55%, transparent) 52%,
					color-mix(in srgb, var(--color-hero-wash) 22%, transparent) 66%,
					transparent 82%
				),
				linear-gradient(
					105deg,
					var(--color-hero-wash) 0%,
					color-mix(in srgb, var(--color-hero-wash) 85%, transparent) 36%,
					color-mix(in srgb, var(--color-hero-wash) 40%, transparent) 58%,
					transparent 80%
				),
				linear-gradient(
					to right,
					transparent 82%,
					color-mix(in srgb, var(--color-hero-wash) 35%, transparent) 92%,
					var(--color-hero-wash) 100%
				),
				linear-gradient(
					to top,
					var(--color-hero-wash) 0%,
					color-mix(in srgb, var(--color-hero-wash) 50%, transparent) 12%,
					transparent 28%
				),
				linear-gradient(
					to bottom,
					var(--color-hero-wash) 0%,
					color-mix(in srgb, var(--color-hero-wash) 40%, transparent) 8%,
					transparent 22%
				);
		}
	}

	.hero-accent {
		background-image: var(--gradient-sunset-text);
		background-clip: text;
		color: transparent;
		filter: drop-shadow(0 1px 0 color-mix(in srgb, var(--color-hero-wash) 70%, transparent));
	}
</style>
