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
        background-color: #F3EEEA;
    }

    main{
        margin-top: 14dvh;
        height: 84dvh;
        margin-bottom: 2dvh;
    }
</style>

<Navbar/>

<main>
    {@render children()}
</main>

<Footer/>
