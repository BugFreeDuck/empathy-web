<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";
    import Footer from "../atomic/organisms/Footer.svelte";

    let {children} = $props();
</script>

<style>
    :global(body), :global(html) {
        position: relative;
        overflow: hidden;
    }

    main{
        margin-top: 10vh;
        height: 88vh;
        margin-bottom: 2vh;
    }
</style>

<Navbar/>

<main>
    {@render children()}
</main>

<Footer/>
