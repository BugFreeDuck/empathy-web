<script lang="ts">

    interface Props {
        name: string
        imageUrl: string,
        href: string,
    }

    let {
        name,
        imageUrl,
        href
    }: Props = $props();



</script>

<style>
    div {
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

    a{
        display: block;
        height: 15vh;
        width: 80vw;
    }
</style>

<div style="background-image: url({imageUrl});">
    <a href="{href}" aria-label="{name}"></a>
</div>

