<script>
    import Logo from "../atoms/Logo.svelte";
    import Sandwich from "../atoms/Sandwich.svelte";
    import NavbarOverlay from "../molecules/NavbarOverlay.svelte";
    import Label from "../atoms/Text/Label.svelte";


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
        z-index: 10;
    }
</style>

<div class="flex items-center justify-center pt-2">
    <Label size={10} font="arsenal" color="gray">© empathy, 2025</Label>
</div>

