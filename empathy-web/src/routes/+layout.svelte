<script lang="ts">
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import DesktopNavbar from "../atomic/organisms/DesktopNavbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";
    import {page} from '$app/state';
    import {base} from '$app/paths'
    import {afterNavigate} from "$app/navigation";
    import MediaQuery from "svelte-media-queries";

    let isMobile = $state(false);
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
        height: auto;
        margin-top: 9dvh;
        margin-bottom: -3dvh;
    }

    main.no-scroll {
        height: 87dvh;
        margin-top: 10dvh;
        margin-bottom: 3dvh;
        overflow-y: hidden;
    }
</style>

<MediaQuery query='(max-width: 600px)' bind:matches={isMobile}/>


{#if isMobile}
        <Navbar/>

        <main class:no-scroll="{noScroll}">
            {@render children()}
        </main>

        <Footer isFixed={noScroll}/>
{:else}
        <DesktopNavbar/>
{/if}


