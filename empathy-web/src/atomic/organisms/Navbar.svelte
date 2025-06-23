<script>
    import Logo from "../atoms/Logo.svelte";
    import Sandwich from "../atoms/Sandwich.svelte";
    import NavbarOverlay from "../molecules/NavbarOverlay.svelte";

    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
        console.log(isOpen);
    }
</script>

<style>
    nav {
        position: relative;
        height: auto;
    }

    div#header {
        height: 13vh;
        background-image: url("/wave.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<nav>
    <div id="header" class="w-full h-auto flex flex-col items-center">
        <Logo></Logo>
        <Sandwich onclick={toggleMenu}></Sandwich>
    </div>

    <NavbarOverlay isOpen={isOpen}/>
</nav>

