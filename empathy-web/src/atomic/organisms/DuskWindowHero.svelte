<script lang="ts">
    import {base} from '$app/paths';
    import {beforeNavigate} from '$app/navigation';

    const REGISTER_HREF =
        'https://docs.google.com/forms/d/e/1FAIpQLScEL6M-bLxUNIufIX8MuHm9402mSsuWmaiHDPRR94OV89lQ2w/viewform';

    const NAV_LINKS = [
        {label: 'Apie mus', href: `${base}/about`},
        {label: 'Tvarkaraštis', href: `${base}/schedule`},
        {label: 'Kainos', href: `${base}/prices`},
        {label: 'Kontaktai', href: `${base}/contacts`}
    ];

    let menuOpen = $state(false);
    beforeNavigate(() => {
        menuOpen = false;
    });
</script>

<style>
    .hero {
        position: relative;
        isolation: isolate;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100dvh;
        min-height: 100dvh;
        max-height: 100dvh;
        overflow: hidden;
        background-color: #3a2414;
        color: #f7efe4;
    }

    .photo-frame {
        position: absolute;
        inset: 0;
        z-index: 0;
        background-color: #3a2414;
    }

    .photo {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 58% 26%;
        filter: sepia(0.32) saturate(1.18) brightness(0.86) contrast(1.06);
    }

    .grade {
        position: absolute;
        inset: 0;
        z-index: 1;
        background-color: #9a5620;
        mix-blend-mode: multiply;
        opacity: 0.34;
        pointer-events: none;
    }

    .veil {
        position: absolute;
        inset: 0;
        z-index: 2;
        background:
            linear-gradient(90deg, rgba(28, 12, 4, 0.62) 0%, rgba(28, 12, 4, 0.28) 28%, rgba(28, 12, 4, 0.04) 48%, transparent 64%),
            linear-gradient(180deg, rgba(24, 10, 4, 0.18) 0%, transparent 28%, rgba(24, 10, 4, 0.38) 100%);
        pointer-events: none;
    }

    header {
        position: relative;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1.25rem 1.5rem;
    }

    nav.desktop-nav {
        display: none;
        align-items: center;
        gap: 2.4rem;
    }

    nav.desktop-nav a {
        font-family: Marcellus, serif;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.04em;
        color: #f7efe4;
    }

    nav.desktop-nav a:hover,
    nav.desktop-nav a:focus-visible {
        color: #e8c989;
    }

    .copy {
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        flex: 1;
        padding: 2rem 1.5rem 3.25rem;
        max-width: 36rem;
    }

    .brand {
        margin: 0;
        font-family: Marcellus, serif;
        font-size: clamp(3.4rem, 11vw, 5.4rem);
        line-height: 0.9;
        font-weight: 400;
        letter-spacing: -0.03em;
        color: #f8f1e6;
    }

    h1 {
        margin: 1.15rem 0 0;
        font-family: Marcellus, serif;
        font-size: clamp(1.55rem, 3.4vw, 2rem);
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.22;
        color: #f8f1e6;
        max-width: 14ch;
    }

    .cta {
        margin-top: 1.7rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 0.82rem 1.7rem;
        background-color: #c9a24a;
        color: #1a1208;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        border-radius: 0;
        transition: background-color 0.2s ease;
    }

    .cta:hover,
    .cta:focus-visible {
        background-color: #d4b05c;
    }

    .menu-toggle {
        position: relative;
        z-index: 6;
        width: 44px;
        height: 44px;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    .menu-toggle span,
    .menu-toggle span::before,
    .menu-toggle span::after {
        display: block;
        width: 20px;
        height: 2px;
        background-color: #f7efe4;
        margin: 0 auto;
    }

    .menu-toggle span {
        position: relative;
    }

    .menu-toggle span::before,
    .menu-toggle span::after {
        content: '';
        position: absolute;
        left: 0;
    }

    .menu-toggle span::before {
        top: -6px;
    }

    .menu-toggle span::after {
        top: 6px;
    }

    .menu-toggle span.open {
        background-color: transparent;
    }

    .menu-toggle span.open::before {
        top: 0;
        transform: rotate(45deg);
    }

    .menu-toggle span.open::after {
        top: 0;
        transform: rotate(-45deg);
    }

    .menu {
        position: absolute;
        inset: 0;
        z-index: 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        background-color: #2a1810;
        transform: translateX(100%);
        transition: transform 0.35s ease;
        visibility: hidden;
    }

    .menu.open {
        transform: translateX(0);
        visibility: visible;
    }

    .menu a {
        font-family: Marcellus, serif;
        font-size: 1.75rem;
        color: #f7efe4;
    }

    @media (min-width: 601px) {
        .mobile-only {
            display: none;
        }

        nav.desktop-nav {
            display: flex;
        }

        header {
            padding: 2.15rem 3.4rem 0;
        }

        .copy {
            padding: 2rem 4.2rem 5.4rem;
        }

        .photo {
            object-position: 52% 24%;
        }

        .veil {
            background:
                linear-gradient(90deg, rgba(28, 12, 4, 0.58) 0%, rgba(28, 12, 4, 0.22) 32%, transparent 52%),
                linear-gradient(180deg, rgba(24, 10, 4, 0.12) 0%, transparent 26%, rgba(24, 10, 4, 0.22) 100%);
        }

        .menu {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .menu {
            transition: none;
        }
    }
</style>

<section class="hero">
    <div class="photo-frame">
        <img
            class="photo"
            src="{base}/desktop/home/window-dusk.jpg"
            width="2400"
            height="3904"
            alt="Empathy studijos mokytoja Olivija prie lango"
            fetchpriority="high"
        />
    </div>
    <div class="grade"></div>
    <div class="veil"></div>

    <header>
        <button
            class="menu-toggle mobile-only"
            type="button"
            aria-label={menuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
            aria-expanded={menuOpen}
            onclick={() => (menuOpen = !menuOpen)}
        >
            <span class:open={menuOpen}></span>
        </button>
        <nav class="desktop-nav" aria-label="Pagrindinė navigacija">
            {#each NAV_LINKS as link (link.href)}
                <a href={link.href}>{link.label}</a>
            {/each}
        </nav>
    </header>

    <div class="menu" class:open={menuOpen} aria-hidden={!menuOpen}>
        <a href={REGISTER_HREF} tabindex={menuOpen ? 0 : -1}>Registracija</a>
        {#each NAV_LINKS as link (link.href)}
            <a href={link.href} tabindex={menuOpen ? 0 : -1}>{link.label}</a>
        {/each}
    </div>

    <div class="copy">
        <p class="brand">empathy</p>
        <h1>Erdvė, kurioje gali būti savimi</h1>
        <a class="cta" href={REGISTER_HREF}>Registracija</a>
    </div>
</section>
