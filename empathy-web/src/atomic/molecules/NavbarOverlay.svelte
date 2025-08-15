<script lang="ts">
    import NavbarLink from "../atoms/NavbarLink.svelte";
    import SocialButton from "../atoms/SocialButton.svelte";

    interface Props {
        isOpen: boolean,
    }

    let {isOpen}: Props = $props();
</script>

<style>
    div.container {
        position: absolute;
        width: 100%;
        height: 90vh;
        margin-top: -3vh;
        padding-top: 10vh;
        background-color: #E5DACF;

        transform: translateX(100%);
        transition: 0.5s transform;
        z-index: 1;
    }

    div.container.visible {
        transform: translateX(0);
    }
</style>

<div class:visible={isOpen} class="container flex flex-col items-center gap-7">
    <NavbarLink text="registracija" route="https://docs.google.com/forms/d/e/1FAIpQLScEL6M-bLxUNIufIX8MuHm9402mSsuWmaiHDPRR94OV89lQ2w/viewform"/>
    <NavbarLink text="apie mus" route="./about"/>
    <NavbarLink text="tvarkaraštis" route="./schedule"/>
    <NavbarLink text="kainos" route="./prices"/>
<!--    <NavbarLink text="paslaugos" route="services"/>-->
    <NavbarLink text="kontaktai" route="./contacts"/>

    <div class="flex flex-row gap-5 mt-15">
        <SocialButton type="Facebook"/>
        <SocialButton type="YouTube"/>
        <SocialButton type="Instagram"/>
<!--        <SocialButton type="TikTok"/>-->
    </div>
</div>