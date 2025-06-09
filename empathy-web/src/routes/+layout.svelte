<script>
    import '../app.css';
    import Navbar from "../atomic/organisms/Navbar.svelte";

    let {children} = $props();
</script>

<Navbar></Navbar>

<main>
    {@render children()}
</main>
