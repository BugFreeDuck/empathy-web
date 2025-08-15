<script lang="ts">
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import DesktopNavbar from "../atomic/organisms/DesktopNavbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";
    import {page} from '$app/state';
    import {base} from '$app/paths'
    import {afterNavigate} from "$app/navigation";
    import MediaQuery from "svelte-media-queries";
    import {mobileQueryState} from "$lib/mobileQuery.svelte";
    import DesktopFooter from "../atomic/organisms/DesktopFooter.svelte";

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

    main.mobile {
        height: auto;
        margin-top: 9dvh;
        margin-bottom: -3dvh;
    }

    main.mobile.no-scroll {
        height: 87dvh;
        margin-top: 10dvh;
        margin-bottom: 3dvh;
        overflow-y: hidden;
    }

    main.desktop{
        height: 90dvh;
        margin-top: 100px;
        margin-bottom: 55px;
    }
</style>

<MediaQuery query='(max-width: 600px)' bind:matches={mobileQueryState.isMobile}/>

{#if mobileQueryState.isMobile}
    <Navbar/>

    <main
            class:mobile="{mobileQueryState.isMobile}"
            class:desktop="{!mobileQueryState.isMobile}"
            class:no-scroll="{noScroll}">
        {@render children()}
    </main>

    <Footer isFixed={noScroll}/>
{:else}
    <DesktopNavbar/>

    <main
            class:mobile="{mobileQueryState.isMobile}"
            class:desktop="{!mobileQueryState.isMobile}"
            class:no-scroll="{noScroll}">
        {@render children()}
    </main>

    <DesktopFooter/>
{/if}


