<script lang="ts">
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

	$effect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			if (!scrolled && y > 32) scrolled = true;
			else if (scrolled && y < 12) scrolled = false;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((e) => e.isIntersecting);
				if (visible.length) active = visible[0].target.id;
			},
			{ rootMargin: '-45% 0px -45% 0px' }
		);

		for (const { id } of sections) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});

	$effect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)} />

<header
	class="enter-fade fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-soft)]
		{scrolled
		? 'border-b border-sand-300/70 bg-sand-50/85 backdrop-blur-xl'
		: 'border-b border-sand-300/25 bg-sand-50/20 backdrop-blur-sm'}"
	style="--enter-delay: 40ms"
>
	<div
		class="mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10
			{scrolled ? 'h-16' : 'h-20'}"
	>
		<div class="enter-rise flex h-full items-center" style="--enter-delay: 120ms">
			<Wordmark showTagline={!scrolled && !menuOpen} />
		</div>

		<div class="hidden items-center gap-8 md:flex lg:gap-10">
			<div class="enter-rise" style="--enter-delay: 220ms">
				<NavLinks {active} />
			</div>
			<div class="enter-rise flex items-center gap-5" style="--enter-delay: 280ms">
				<LanguageSwitcher />
				<Button class="px-6 py-2.5 text-xs" onclick={() => registrationUI.show()}>
					{i18n.m.nav.register}
				</Button>
			</div>
		</div>

		<div class="flex items-center gap-3 md:hidden">
			<LanguageSwitcher class="enter-rise" />
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
					class="hamburger-line h-px w-6 origin-center bg-bark-900 {menuOpen
						? 'translate-y-[3.5px] rotate-45'
						: ''}"
				></span>
				<span
					class="hamburger-line h-px w-6 origin-center bg-bark-900 {menuOpen
						? '-translate-y-[3.5px] -rotate-45'
						: ''}"
				></span>
			</button>
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
		<NavLinks {active} orientation="column" onnavigate={() => (menuOpen = false)} />
		<div class="menu-cta">
			<Button
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
