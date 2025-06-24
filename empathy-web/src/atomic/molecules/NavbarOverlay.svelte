<script lang="ts">
    import NavbarLink from "../atoms/NavbarLink.svelte";

    interface Props {
        isOpen: boolean,
    }

    let {isOpen}: Props = $props();
</script>

<style>
    div {
        position: absolute;
        width: 100%;
        height: 90vh;
        margin-top: -3vh;
        padding-top: 15vh;
        background-color: #E5DACF;

        transform: translateX(100%);
        transition: 0.5s transform;
        z-index: 1;
    }

    div.visible {
        transform: translateX(0);
    }
</style>

<div class:visible={isOpen} class="flex flex-col items-center gap-7">
    <NavbarLink text="registration" route="register"/>
    <NavbarLink text="about us" route="about"/>
    <NavbarLink text="schedule" route="schedule"/>
    <NavbarLink text="prices" route="prices"/>
    <NavbarLink text="services" route="services"/>
    <NavbarLink text="contacts" route="contacts"/>
</div>