<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";
    import { page } from '$app/state';

    let {children} = $props();

</script>

<style>
    :global(body), :global(html) {
        position: relative;
        overflow-y: visible;
        overflow-x: hidden;
        background-color: #F3EEEA;
    }

    main{
        height: auto;
        margin-top: 14dvh;
        margin-bottom: 6dvh;
    }

    main.no-scroll{
        height: 84dvh;
        margin-bottom: 2dvh;
    }
</style>

<Navbar/>

<main class:no-scroll="{['/', '/prices'].includes(page.url.pathname)}">
    {@render children()}
</main>

<Footer/>
