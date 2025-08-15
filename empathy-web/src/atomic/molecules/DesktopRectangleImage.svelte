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
    div {
        position: relative;
        aspect-ratio: 1440/317;
        max-height: 317px;

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

