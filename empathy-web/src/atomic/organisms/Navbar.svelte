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
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 10;
    }

    div#header {
        height: 13vh;
        background-image: url("/wave-header.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<nav>
    <div id="header" class="w-full h-auto flex flex-col items-center">
        <Logo></Logo>
        <Sandwich bind:isOpen></Sandwich>
    </div>

    <NavbarOverlay isOpen={isOpen}/>
</nav>

