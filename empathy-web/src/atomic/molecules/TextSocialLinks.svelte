<script lang="ts">

    import Label from "../atoms/Text/Label.svelte";
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
        <Label size={12}>INSTAGRAM</Label>
    </a>
    <a href="https://www.facebook.com/vdoh.dance">
        <Label size={12}>FACEBOOK</Label>
    </a>
    <a href="https://www.youtube.com/@vdohdance">
        <Label size={12}>YOUTUBE</Label>
    </a>
</div>