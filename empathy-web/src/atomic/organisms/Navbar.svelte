<script>
    import Logo from "../atoms/Logo.svelte";
    import Text from "../atoms/Text.svelte";
    import RegisterButton from "../atoms/RegisterButton.svelte";
</script>

<style>
    nav{
        height: 200px;
        background-image: url("/wave.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<nav class="w-auto flex flex-row space justify-between p-8">
    <div class="flex flex-col items-center m-auto">
        <Logo></Logo>
        <Text type="logo-text">empathy</Text>
        <Text type="logo-subtext">PLACE FOR MOVEMENT, DANCE & GROWTH</Text>
    </div>
    <div class="absolute right-20 top-10">
        <RegisterButton/>
    </div>
</nav>
