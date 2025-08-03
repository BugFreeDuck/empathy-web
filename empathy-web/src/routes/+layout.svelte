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
        base + '/prices'
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
        height: auto;
        margin-top: 14dvh;
        margin-bottom: -3dvh;
    }

    main.no-scroll {
        height: 84dvh;
        margin-bottom: 2dvh;
    }
</style>

<Navbar/>

<main class:no-scroll="{noScroll}">
    {@render children()}
</main>

<Footer isFixed={noScroll}/>
