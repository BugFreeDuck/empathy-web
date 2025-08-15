<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import type {Snippet} from "svelte";

    interface Props {
        title?: string
        href?: string,
        imageUrl: string,
        animationDelay?: number
        marginTop?: number
        children?: Snippet
    }

    let {
        title,
        imageUrl,
        href,
        animationDelay,
        marginTop,
        children
    }: Props = $props();
</script>

<style>
    div {
        position: relative;
        aspect-ratio: 1440/664;
        max-height: 664px;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 1;
        z-index: 2;
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

