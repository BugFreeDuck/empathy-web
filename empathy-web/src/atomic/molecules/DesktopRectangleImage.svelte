<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";
    import type {Snippet} from "svelte";

    interface Props {
        title?: string
        href?: string,
        imageUrl: string,
        animationDelay?: number
        children?: Snippet
    }

    let {
        title,
        imageUrl,
        href,
        animationDelay,
        children,
    }: Props = $props();
</script>

<style>
    div {
        position: relative;
        aspect-ratio: var(--aspect-ratio);
        max-height: var(--max-height);
        height: var(--height);
        margin-top: var(--margin-top);

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-grow: 1;
    }
</style>

<div
        style="
        background-image: url(./{imageUrl});
        animation-delay: {animationDelay}ms;"
        class:animate="{animationDelay}">
    {#if children}
        {@render children?.()}
    {:else if href}
        <a href="{href}" aria-label="{title}">
            <Label font="marcellus" color="white" size={76} --letter-spacing="0.4em">{title}</Label>
        </a>
    {:else}
        <Label font="marcellus" color="white" size={76} --letter-spacing="0.4em">{title}</Label>
    {/if}


</div>

