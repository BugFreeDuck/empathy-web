<script lang="ts">
    import Label from "../atoms/Text/Label.svelte";

    interface Props {
        isFixed: boolean
    }

    let {isFixed}: Props = $props();
</script>

<style>
    div.fixed{
        position: fixed;
        bottom: 0;
    }

    div {
        aspect-ratio: 402/57;
        height: auto;
        width: 100%;
        background-image: url("/wave-footer.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 10;
    }
</style>

<div class="flex items-center justify-center pt-5"
     class:fixed={isFixed}>
    <Label size={10} font="arsenal" color="gray">© empathy, 2025</Label>
</div>

