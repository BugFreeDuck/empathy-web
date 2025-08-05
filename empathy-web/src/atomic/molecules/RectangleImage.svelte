<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        title?: string
        href?: string,
        imageUrl: string,
        animationDelay?: number
        marginTop?: number
    }

    let {
        title,
        imageUrl,
        href,
        animationDelay,
        marginTop,
    }: Props = $props();
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
        aspect-ratio: 402/186;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 1;
    }

    div:not(:first-of-type) {
        margin-top: -0.2lvh;
    }

    div.animate {
        filter: blur(10px);
        animation: unblur 0.5s;
        animation-fill-mode: forwards;
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
        margin-top: {marginTop}em;"
        class:animate="{animationDelay}">
    {#if href}
        <a href="{href}" aria-label="{title}">
            <Label font="marcellus" color="sand" size={42}>{title}</Label>
        </a>
    {:else}
        <Label font="marcellus" color="sand" size={42}>{title}</Label>
    {/if}


</div>

