<script>
    import Logo from "../atoms/Logo.svelte";
    import Sandwich from "../atoms/Sandwich.svelte";
    import NavbarOverlay from "../molecules/NavbarOverlay.svelte";

    import {beforeNavigate} from "$app/navigation";

    let isOpen = $state(false);
    beforeNavigate(() => isOpen = false);
</script>

<style>
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
    }

    div#header {
        aspect-ratio: 784/94;
        height: 94px;
        width: 100%;

        padding-top: 1em;

        display: flex;
        align-items: center;
        justify-content: start;

        background-image: url("/wawe-header.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: inherit;
    }
</style>

<nav>
    <div id="header" class="w-full h-auto flex flex-col items-center">
        <Logo></Logo>
        <Sandwich bind:isOpen></Sandwich>
    </div>

    <NavbarOverlay isOpen={isOpen}/>
</nav>

