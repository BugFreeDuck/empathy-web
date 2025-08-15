<script lang="ts">

    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        fontSize: number;
    }

    let {fontSize}: Props = $props();
</script>

<style>

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3em;
    }
</style>

<div>
    <a href="https://www.instagram.com/vdoh.dance/">
        <Label size={fontSize}>INSTAGRAM</Label>
    </a>
    <a href="https://www.facebook.com/vdoh.dance">
        <Label size={fontSize}>FACEBOOK</Label>
    </a>
    <a href="https://www.youtube.com/@vdohdance">
        <Label size={fontSize}>YOUTUBE</Label>
    </a>
</div>