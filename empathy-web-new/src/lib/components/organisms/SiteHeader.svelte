<script lang="ts">
	import { untrack } from 'svelte';
	import Button from '$atoms/Button.svelte';
	import Wordmark from '$atoms/Wordmark.svelte';
	import LanguageSwitcher from '$molecules/LanguageSwitcher.svelte';
	import NavLinks from '$molecules/NavLinks.svelte';
	import { i18n } from '$i18n';
	import { sections } from '$data/site';
	import { registrationUI } from '$lib/stores/registration.svelte';

	let scrolled = $state(false);
	let active = $state<string | undefined>(undefined);
	let menuOpen = $state(false);

	/** Match compact header used by `scrollToSection`. */
	const ACTIVE_MARKER_PX = 64;

	let activeLockUntil = 0;

	function lockActive(id: string, ms = 900) {
		active = id;
		activeLockUntil = performance.now() + ms;
	}

	function updateScrolled() {
		const y = window.scrollY;
		if (!scrolled && y > 32) scrolled = true;
		else if (scrolled && y < 12) scrolled = false;
	}

	/** Pick the last section whose top has crossed the header marker line. */
	function syncActiveFromScroll() {
		if (performance.now() < activeLockUntil) return;

		let current: string | undefined;
		for (const { id } of sections) {
			const section = document.getElementById(id);
			if (!section) continue;
			if (section.getBoundingClientRect().top <= ACTIVE_MARKER_PX) current = id;
		}

		const doc = document.documentElement;
		const y = window.scrollY;
		const atBottom = window.innerHeight + y >= doc.scrollHeight - 8;
		if (atBottom) current = sections[sections.length - 1]?.id;

		// Near the very top (hero), clear highlight.
		if (y < 48) current = undefined;

		if (current !== active) active = current;
	}

	$effect(() => {
		const onScroll = () => {
			updateScrolled();
			syncActiveFromScroll();
		};

		// Don't subscribe to scrolled/active — only set up listeners once.
		untrack(onScroll);

		window.addEventListener('scroll', onScroll, { passive: true });
		document.addEventListener('scroll', onScroll, { passive: true, capture: true });
		window.addEventListener('resize', syncActiveFromScroll, { passive: true });
		const onScrollCancel = () => {
			activeLockUntil = 0;
			untrack(syncActiveFromScroll);
		};
		window.addEventListener('empathy:scroll-cancel', onScrollCancel);

		const boot = window.setTimeout(() => untrack(syncActiveFromScroll), 0);

		return () => {
			window.removeEventListener('scroll', onScroll);
			document.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
			window.removeEventListener('resize', syncActiveFromScroll);
			window.removeEventListener('empathy:scroll-cancel', onScrollCancel);
			window.clearTimeout(boot);
		};
	});

	$effect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)} />

<header class="enter-fade fixed inset-x-0 top-0 z-50 px-6 lg:px-10" style="--enter-delay: 40ms">
	<!-- Full-width solid chrome (scrolled) -->
	<div
		aria-hidden="true"
		class="nav-chrome pointer-events-none absolute top-0 left-1/2 h-full w-screen -translate-x-1/2 border-b border-sand-300/70 bg-sand-50
			{scrolled ? 'nav-chrome--visible' : ''}"
	></div>

	<!-- Full-width frosted chrome (top) -->
	<div
		aria-hidden="true"
		class="nav-chrome pointer-events-none absolute top-0 left-1/2 h-full w-screen -translate-x-1/2 border-b border-white/10 bg-bark-900/45 backdrop-blur-md
			{scrolled ? '' : 'nav-chrome--visible'}"
	></div>

	<div class="relative mx-auto max-w-7xl">
		<div
			class="nav-bar relative flex min-w-0 items-center justify-between gap-3 px-4 sm:px-5 lg:px-8
				{scrolled ? 'h-16' : 'h-20'}"
		>
			<div class="enter-rise flex min-w-0 shrink items-center" style="--enter-delay: 120ms">
				<Wordmark
					showTagline={!scrolled && !menuOpen}
					class={scrolled ? '' : 'text-sand-300 [&_.tagline-text]:text-sand-400'}
				/>
			</div>

			<div class="hidden items-center gap-8 md:flex lg:gap-10">
				<div class="enter-rise" style="--enter-delay: 220ms">
					<NavLinks {active} onDark={!scrolled} onselect={lockActive} />
				</div>
				<div class="enter-rise flex items-center gap-5" style="--enter-delay: 280ms">
					<LanguageSwitcher onDark={!scrolled} />
					<Button
						variant="outline"
						class="px-6 py-2.5 text-xs {scrolled
							? ''
							: '!border-sand-300 !text-sand-300 hover:!border-sand-50 hover:!text-sand-50'}"
						onclick={() => registrationUI.show()}
					>
						{i18n.m.nav.register}
					</Button>
				</div>
			</div>

			<div class="flex shrink-0 items-center gap-2 sm:gap-3 md:hidden">
				<LanguageSwitcher class="enter-rise" onDark={!scrolled} />
				<button
					type="button"
					onclick={() => (menuOpen = !menuOpen)}
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
					aria-label={menuOpen ? i18n.m.nav.closeMenu : i18n.m.nav.openMenu}
					class="enter-rise relative z-50 flex size-10 flex-col items-center justify-center gap-1.5"
					style="--enter-delay: 220ms"
				>
					<span
						class="hamburger-line h-px w-6 origin-center {scrolled
							? 'bg-bark-900'
							: 'bg-sand-300'} {menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}"
					></span>
					<span
						class="hamburger-line h-px w-6 origin-center {scrolled
							? 'bg-bark-900'
							: 'bg-sand-300'} {menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}"
					></span>
				</button>
			</div>
		</div>
	</div>
</header>

<div
	id="mobile-nav"
	class="menu-panel fixed inset-0 z-40 flex flex-col justify-center gap-12 bg-sand-50 px-8 md:hidden
		{menuOpen ? 'menu-panel--open' : ''}"
	role="dialog"
	aria-modal="true"
	aria-label={i18n.m.nav.mobileNav}
	aria-hidden={!menuOpen}
	inert={!menuOpen}
>
	<div class="menu-content flex flex-col gap-12">
		<NavLinks
			{active}
			orientation="column"
			onselect={lockActive}
			onnavigate={() => (menuOpen = false)}
		/>
		<div class="menu-cta">
			<Button
				variant="outline"
				class="self-start"
				onclick={() => {
					menuOpen = false;
					registrationUI.show();
				}}
			>
				{i18n.m.nav.register}
			</Button>
		</div>
	</div>
</div>

<style>
	.nav-chrome {
		opacity: 0;
		transition: opacity 0.3s var(--ease-soft);
	}

	.nav-chrome--visible {
		opacity: 1;
	}

	.nav-bar {
		transition: height 0.3s var(--ease-soft);
	}

	.hamburger-line {
		transition: transform 0.45s var(--ease-soft);
	}

	.menu-panel {
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		transition:
			opacity 0.45s var(--ease-soft),
			visibility 0.45s var(--ease-soft);
	}

	.menu-panel--open {
		visibility: visible;
		opacity: 1;
		pointer-events: auto;
	}

	.menu-content :global(a),
	.menu-cta {
		opacity: 0;
		transform: translate3d(0, 1.25rem, 0);
		transition:
			opacity 0.35s var(--ease-soft),
			transform 0.45s var(--ease-soft);
	}

	.menu-panel--open .menu-content :global(a),
	.menu-panel--open .menu-cta {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}

	.menu-panel--open .menu-content :global(a:nth-child(1)) {
		transition-delay: 90ms;
	}
	.menu-panel--open .menu-content :global(a:nth-child(2)) {
		transition-delay: 140ms;
	}
	.menu-panel--open .menu-content :global(a:nth-child(3)) {
		transition-delay: 190ms;
	}
	.menu-panel--open .menu-content :global(a:nth-child(4)) {
		transition-delay: 240ms;
	}
	.menu-panel--open .menu-content :global(a:nth-child(5)) {
		transition-delay: 290ms;
	}
	.menu-panel--open .menu-cta {
		transition-delay: 340ms;
	}

	@media (prefers-reduced-motion: reduce) {
		.nav-chrome,
		.nav-bar,
		.hamburger-line,
		.menu-panel,
		.menu-content :global(a),
		.menu-cta {
			transition: none;
		}

		.menu-content :global(a),
		.menu-cta {
			opacity: 1;
			transform: none;
		}
	}
</style>
