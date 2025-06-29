<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";
    import {page} from '$app/state';
    import {base} from '$app/paths'

    let {children} = $props();

    const noScrollPages = [
        base,
        base + '/prices'
    ]
    const currentPage = page.url.pathname.replace(/\/$/, "");
    const noScroll = noScrollPages.includes(currentPage);

    console.log(noScrollPages);
    console.log(currentPage);
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
        margin-bottom: 6dvh;
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

<Footer/>
