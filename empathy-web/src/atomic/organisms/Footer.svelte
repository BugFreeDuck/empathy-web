<script>
    import Logo from "../atoms/Logo.svelte";
    import Sandwich from "../atoms/Sandwich.svelte";
    import NavbarOverlay from "../molecules/NavbarOverlay.svelte";
    import Text from "../atoms/Text.svelte";


</script>

<style>
    div {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-image: url("/wave-footer.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }
</style>

<div class="flex items-center justify-center pt-5">
    <Text type="logo-subtext">© empathy, 2025</Text>
</div>

