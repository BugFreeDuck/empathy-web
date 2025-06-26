<script lang="ts">

    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        name: string
        title?: string,
        imageUrl: string,
        href?: string,
        separator?: boolean
    }

    let {
        name,
        title,
        imageUrl,
        href,
        separator
    }: Props = $props();
</script>

<style>
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

    div.separator:after{
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;

        background-image: url("/wave-separator.svg");
        aspect-ratio: 403/30;
        z-index: 2;
    }

    a {
        display: block;
        height: 15vh;
        width: 80vw;
    }
</style>

<div style="background-image: url({imageUrl});" class:separator={separator}>
    {#if href}
        <a href="{href}" aria-label="{name}"></a>
    {/if}
    {#if title}
        <Label font="arsenal" size={24}>{title}</Label>
    {/if}
</div>

