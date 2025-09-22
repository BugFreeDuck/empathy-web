<script lang="ts">
    import DesktopLogo from "../atoms/DesktopLogo.svelte";
    import RegisterButton from "../atoms/RegisterButton.svelte";
</script>

<style>
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
    }

    div#header {
        height: 89px;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-image: url("/desktop/wave-header.svg");
        background-position: center;
        background-repeat: repeat-x;
    }

    div.header-container {
        position: relative;
        height: 100%;
        width: 100%;
        max-width: 2000px;
    }

    div.register-container{
        position: absolute;
        top: 10px;
        right: 20px;
    }
</style>

<nav>
    <div id="header" class="w-full h-auto flex flex-col items-center">
        <div class="header-container flex flex-col items-center justify-center">
            <DesktopLogo/>
            <div class="register-container">
                <RegisterButton/>
            </div>
        </div>
    </div>
</nav>

