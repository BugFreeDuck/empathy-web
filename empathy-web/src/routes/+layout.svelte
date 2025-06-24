<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";

    let {children} = $props();
</script>

<style>
    :global(body), :global(html) {
        overflow: hidden;
        height: 100%;
    }
</style>

<Navbar/>

<main>
    {@render children()}
</main>

<Footer/>
