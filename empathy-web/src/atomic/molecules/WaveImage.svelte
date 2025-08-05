<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import type {Snippet} from "svelte";
    interface Props {
        title?: string
        sideTextHeader?: string
        sideText?: string
        imageUrl: string,
        href?: string,
        separator?: boolean
        animationDelay?: number
        marginTop?: number
        marginBot?: number
        aspectRatio?: string
        grow?: number
        children?: Snippet
    }

    let {
        title,
        sideTextHeader,
        sideText,
        imageUrl,
        href,
        separator,
        animationDelay,
        marginTop,
        marginBot,
        aspectRatio,
        grow,
        children,
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
        aspect-ratio: 402/204;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:not(:first-of-type){
        margin-top: -0.2lvh;
    }

    div.side-text{
        flex-direction: column;
        align-items: end;
        padding-right: 12lvw;
    }

    span{
        display: flex;
        flex-direction: column;

        text-align: left;
    }

    div.animate {
        filter: blur(10px);
        animation: unblur 0.5s;
        animation-fill-mode: forwards;
    }

    div.separator:after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;

        background-image: url("/wave-separator.svg");
        background-repeat: no-repeat;
        background-size: cover;
        aspect-ratio: 402/31;
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
        margin-top: {marginTop}lvw;
        margin-bot: {marginBot}lvw;
        aspect-ratio: {aspectRatio};
        flex-grow: {grow}"

        class:separator={separator}
        class:animate="{animationDelay}"
        class:side-text={sideText}>

    {#if children}
        {@render children?.()}
    {:else if href}
        <a href="{href}" aria-label="{title}">
            <Label font="marcellus" color="white" size={42}>{title}</Label>
        </a>
    {:else}
        <Label font="marcellus" color="white" size={42}>{title}</Label>
    {/if}

    {#if sideText}
        <span class="side-container">
            <Label font="marcellus" color="black" size={20}>{sideTextHeader}</Label>
            <Label font="marcellus" color="black" size={20}>{sideText}</Label>
        </span>
    {/if}

</div>

