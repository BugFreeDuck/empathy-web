<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        name: string
        title?: string,
        imageUrl: string,
        href?: string,
        separator?: boolean
        animationDelay?: number
    }

    let {
        name,
        imageUrl,
        href,
        separator,
        animationDelay
    }: Props = $props();
</script>

<style>
    @keyframes fly-in {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%)
        }
    }

    @keyframes unblur {
        0% {
            filter: blur(10px);
            /*opacity: 0;*/
        }
        100% {
            filter: blur(0px);
            /*opacity: 1;*/
        }
    }

    div {
        position: relative;
        aspect-ratio: 402/204;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        flex-grow: 1;
        margin-top: -4vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.animate {
        /*transform: translateX(-100%);*/
        filter: blur(10px);
        /*opacity: 0;*/
        animation: unblur 1s;
        animation-fill-mode: forwards;
    }

    div.separator:after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;

        background-image: url("/wave-separator.svg");
        aspect-ratio: 403/30;
        z-index: 2;
    }

    a {
        padding: 10%;
        display: block;
        width: auto;
    }
</style>

<div
        style="
        background-image: url(./{imageUrl});
        animation-delay: {animationDelay}ms;
    "
        class:separator={separator}
        class:animate="{animationDelay}">
    {#if href}
        <a href="{href}" aria-label="{name}">
            <Label font="arsenal" color="white" size={42}>{name}</Label>
        </a>
    {:else}
        <Label font="arsenal" color="white" size={42}>{name}</Label>
    {/if}

</div>

