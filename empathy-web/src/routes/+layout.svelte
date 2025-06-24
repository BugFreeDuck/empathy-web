<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";

    let {children} = $props();
</script>

<style>
    :global(body) {
        overflow: hidden;
    }
</style>

<Navbar/>

<main>
    {@render children()}
</main>

<Footer/>
