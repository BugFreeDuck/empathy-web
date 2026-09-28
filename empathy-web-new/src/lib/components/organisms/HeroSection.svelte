<script lang="ts">
	import Button from '$atoms/Button.svelte';
	import HeroVideo from '$atoms/HeroVideo.svelte';
	import { i18n } from '$i18n';
	import { registrationUI } from '$lib/stores/registration.svelte';
	import { scrollToSection } from '$lib/utils/scroll';
</script>

<section
	id="top"
	class="relative isolate flex h-[100svh] min-h-[100svh] flex-col overflow-hidden bg-bark-900"
>
	<div class="hero-media absolute inset-0 -z-10">
		<HeroVideo />
	</div>

	<div
		class="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center"
	>
		<h1
			class="hero-title enter-rise text-[clamp(2rem,6.5vw,4.25rem)] leading-[0.95] tracking-tight text-balance text-sand-300 uppercase"
			style="--enter-delay: 200ms"
		>
			{i18n.m.hero.title}
		</h1>

		<p
			class="hero-lead enter-rise mt-5 max-w-xl text-base leading-relaxed font-bold text-sand-50 md:mt-6 md:text-lg"
			style="--enter-delay: 320ms"
		>
			{i18n.m.hero.lead}
		</p>

		<div class="enter-rise mt-8 md:mt-10" style="--enter-delay: 420ms">
			<Button
				class="!border-[var(--color-sand-300)] !bg-[var(--color-sand-300)] ![background-image:none] !px-9 !py-4 !text-base !font-bold !tracking-wider !text-bark-900 !shadow-none hover:!border-sand-50 hover:!bg-sand-50"
				onclick={() => registrationUI.show()}
			>
				{i18n.m.hero.cta}
			</Button>
		</div>
	</div>

	<a
		href="#apie"
		onclick={(e) => {
			e.preventDefault();
			scrollToSection('apie');
		}}
		class="hero-scroll enter-fade absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-3 text-[0.7rem] font-medium tracking-[0.25em] text-sand-50 uppercase md:bottom-8"
		style="--enter-delay: 560ms"
	>
		{i18n.m.hero.scroll}
		<span class="relative h-11 w-px overflow-hidden bg-sand-50/55">
			<span class="absolute inset-x-0 top-1/4 h-6 bg-sunset shadow-[0_0_8px_var(--color-sunset)]"></span>
		</span>
	</a>
</section>

<style>
	.hero-media {
		background-color: var(--color-bark-900);
	}

	.hero-title {
		font-family: var(--font-hero);
		font-weight: 400; /* Archivo Black is a single heavy cut */
		filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.55)) drop-shadow(0 3px 6px rgb(0 0 0 / 0.45));
	}

	/* Archivo Black has no Cyrillic — use Montserrat Black so RU stays weighty. */
	:global(html[lang='ru']) .hero-title {
		font-family: var(--font-hero-cyrillic);
		font-weight: 900;
	}

	.hero-lead {
		filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.55)) drop-shadow(0 3px 6px rgb(0 0 0 / 0.45));
	}

	.hero-scroll {
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.7)) drop-shadow(0 2px 8px rgb(0 0 0 / 0.45));
	}
</style>
