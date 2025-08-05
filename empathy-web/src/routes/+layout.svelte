<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";
    import {page} from '$app/state';
    import {base} from '$app/paths'
    import {afterNavigate} from "$app/navigation";

    let {children} = $props();
    let noScroll = $state(true);

    const noScrollPages = [
        base,
        base + '/prices',
        base + '/schedule',
        base + '/services',
        base + '/contacts',
    ];

    afterNavigate(() => {
        const currentPage = page.url.pathname.replace(/\/$/, "");
        noScroll = noScrollPages.includes(currentPage);
    });
</script>

<style>
    :global(body), :global(html) {
        position: relative;
        overflow-y: visible;
        overflow-x: hidden;
        background-color: #F3EEEA;
    }

    main {
        height: 87lvh;
        margin-top: 10lvh;
        margin-bottom: -3dvh;
    }

    main.no-scroll {
        height: 87lvh;
        margin-bottom: 3lvh;
        overflow-y: hidden;
    }
</style>

<Navbar/>

<main class:no-scroll="{noScroll}">
    {@render children()}
</main>

<Footer isFixed={noScroll}/>
