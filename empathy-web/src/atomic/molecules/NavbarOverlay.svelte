<script lang="ts">
    import NavbarButton from "../atoms/NavbarButton.svelte";

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
        padding-top: 3vh;
        background-color: #E5DACF;

        transform: translateX(100%);
        transition: 0.5s transform;
        z-index: 1;
    }

    div.visible {
        transform: translateX(0);
    }
</style>

<div class:visible={isOpen} class="flex flex-col items-center justify-center">
    <NavbarButton text="registration"/>
    <NavbarButton text="about us"/>
    <NavbarButton text="schedule"/>
    <NavbarButton text="prices"/>
    <NavbarButton text="services"/>
    <NavbarButton text="contacts"/>
</div>