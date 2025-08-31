<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import type {Snippet} from "svelte";

    interface Props {
        title?: string
        href?: string,
        imageUrl: string,
        animationDelay?: number,
        noGreyscale?: boolean,
        children?: Snippet
    }

    let {
        title,
        imageUrl,
        href,
        animationDelay,
        noGreyscale,
        children
    }: Props = $props();

    function navigate(href: string) {
        if (href) {
            window.location.href = href;
        }
    }
</script>

<style>
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
        /*aspect-ratio: 360/880;*/
        height: 100%;
        width: 100%;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        background-color: rgba(255, 255, 255, 1);
        background-blend-mode: luminosity;
        transition: background-color 0.2s ease-out;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 1;

    }

    div.clickable {
        cursor: pointer;
    }

    div.no-greyscale {
        background-blend-mode: initial;
        background-color: rgba(255, 255, 255, 0);
    }

    div:hover {
        background-color: rgba(255, 255, 255, 0);
    }
</style>

<div
        style="
        background-image: url(./{imageUrl});
        animation-delay: {animationDelay}ms;"
        class:animate="{animationDelay}"
        class:no-greyscale="{noGreyscale}"
        class:clickable={href}
        on:click={() => navigate(href)}
        role="button"
        tabindex="0">

    {#if children}
        {@render children?.()}
    {:else}
        <Label font="marcellus" color="sand" size={42}>{title}</Label>
    {/if}
</div>

