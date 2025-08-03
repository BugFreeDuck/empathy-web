<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        title?: string
        sideTextHeader?: string
        sideText?: string
        imageUrl: string,
        href?: string,
        separator?: boolean
        animationDelay?: number
        marginTop?: number
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

    div.side-text{
        flex-direction: column;
        align-items: end;
        padding-right: 2em;
    }

    span{
        display: flex;
        flex-direction: column;

        text-align: left;
        width: 170px;
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
        margin-top: {marginTop}em;
    "
        class:separator={separator}
        class:animate="{animationDelay}"
        class:side-text={sideText}>
    {#if href}
        <a href="{href}" aria-label="{title}">
            <Label font="arsenal" color="white" size={42}>{title}</Label>
        </a>
    {:else}
        <Label font="arsenal" color="white" size={42}>{title}</Label>
    {/if}

    {#if sideText}
        <span class="side-container">
            <Label font="arsenal" color="black" size={20}>{sideTextHeader}</Label>
            <Label font="arsenal" color="black" size={20}>{sideText}</Label>
        </span>
    {/if}

</div>

