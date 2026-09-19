<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import Glow from '$atoms/Glow.svelte';
	import Icon from '$atoms/Icon.svelte';
	import Photo from '$atoms/Photo.svelte';
	import { parallax } from '$lib/actions/parallax';
	import { site } from '$data/site';
	import { scrollToSection } from '$lib/utils/scroll';

	const highlights = [
		{ value: '4–60+', label: 'Amžiaus grupės' },
		{ value: '2×', label: 'Pamokos per savaitę' },
		{ value: '1-a', label: 'Pamoka nemokama' }
	];
</script>

<section
	id="top"
	class="bg-dawn relative isolate flex h-[100svh] min-h-[100svh] flex-col overflow-hidden"
>
	<!-- Full-bleed hero photo — same frame on every breakpoint. -->
	<div class="absolute inset-0 -z-10">
		<div class="enter-fade absolute inset-0" style="--enter-delay: 80ms">
			<div class="hero-photo parallax absolute inset-0 [--parallax-scale:1.1]" use:parallax={0.04}>
				<Photo slug="hero-wide" priority sizes="100vw" position="72% center" />
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
			class="enter-fade text-xs tracking-[0.3em] text-ember-600 uppercase"
			style="--enter-delay: 160ms"
		>
			{site.city} · Šiuolaikinis šokis
		</p>

		<h1
			class="enter-fade mt-5 max-w-4xl font-display text-[clamp(2.35rem,9vw,6.5rem)] leading-[0.95] text-balance text-bark-900 md:mt-7"
			style="--enter-delay: 260ms"
		>
			Judesys, ryšys ir <span class="text-sunset italic">sąmoningumas</span>
		</h1>

		<p
			class="enter-fade mt-5 max-w-lg text-base leading-relaxed text-bark-600 md:mt-8 md:text-lg"
			style="--enter-delay: 380ms"
		>
			Šokio studija vaikams, paaugliams ir suaugusiems. Čia mokomės judėti laisvai, klausytis savęs
			ir augti kartu — saugioje, empatiškoje erdvėje.
		</p>

		<div class="enter-fade mt-7 flex flex-wrap gap-3 md:mt-10 md:gap-4" style="--enter-delay: 500ms">
			<Button href={site.registrationUrl} external>
				Registruotis į pamoką
				<Icon name="arrow" class="size-4" />
			</Button>
			<Button href="#tvarkarastis" variant="outline" onclick={(e) => { e.preventDefault(); scrollToSection('tvarkarastis'); }}>
				Peržiūrėti tvarkaraštį
			</Button>
		</div>

		<dl
			class="enter-fade mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-sand-300/80 pt-5 md:mt-16 md:gap-x-12 md:pt-8"
			style="--enter-delay: 620ms"
		>
			{#each highlights as item (item.label)}
				<div class="flex flex-col gap-1">
					<dt class="sr-only">{item.label}</dt>
					<dd class="font-display text-2xl text-bark-900 md:text-3xl">{item.value}</dd>
					<p class="text-[0.6rem] tracking-[0.2em] text-bark-400 uppercase md:text-[0.65rem]">
						{item.label}
					</p>
				</div>
			{/each}
		</dl>
	</div>

	<a
		href="#apie"
		onclick={(e) => {
			e.preventDefault();
			scrollToSection('apie');
		}}
		class="enter-fade absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-3 text-[0.6rem] tracking-[0.25em] text-bark-400 uppercase md:bottom-8"
		style="--enter-delay: 760ms"
	>
		Slinkite žemyn
		<span class="relative h-10 w-px overflow-hidden bg-sand-300">
			<span class="absolute inset-x-0 top-1/4 h-5 bg-sunset"></span>
		</span>
	</a>
</section>

<style>
	/*
	 * Mobile: favour the empty floor (top-left) and wash the copy column solid
	 * so faces never sit under the type. Desktop keeps dancers on the right.
	 */
	.hero-photo :global(img) {
		object-position: 12% 18%;
	}

	@media (min-width: 768px) {
		.hero-photo :global(img) {
			object-position: 72% center;
		}
	}

	.hero-scrim {
		background:
			linear-gradient(
				to right,
				color-mix(in srgb, var(--color-sand-50) 88%, transparent) 0%,
				color-mix(in srgb, var(--color-sand-50) 72%, transparent) 38%,
				color-mix(in srgb, var(--color-sand-50) 35%, transparent) 62%,
				transparent 88%
			),
			linear-gradient(
				to top,
				color-mix(in srgb, var(--color-sand-50) 75%, transparent) 0%,
				color-mix(in srgb, var(--color-sand-50) 40%, transparent) 20%,
				transparent 45%
			),
			linear-gradient(
				to bottom,
				color-mix(in srgb, var(--color-sand-50) 45%, transparent) 0%,
				transparent 18%
			);
	}

	@media (min-width: 768px) {
		.hero-scrim {
			background:
				linear-gradient(
					100deg,
					var(--color-sand-50) 0%,
					color-mix(in srgb, var(--color-sand-50) 94%, transparent) 36%,
					color-mix(in srgb, var(--color-sand-50) 60%, transparent) 56%,
					transparent 84%
				),
				linear-gradient(to top, var(--color-sand-50) 0%, transparent 22%);
		}
	}
</style>
