<script lang="ts">
    import type {Snippet} from "svelte";

    type Font = 'arsenal' | 'cormorant';
    type Weight = 'normal' | 'bold';

    interface Props {
        font?: Font,
        weight?: Weight,
        size?: number
        children?: Snippet
    }

    let {
        font = 'arsenal',
        weight = 'normal',
        size = 12,
        children
    }: Props = $props();

    let fontFamily = font === 'arsenal'
        ? 'Arsenal, serif'
        : 'Cormorant Garamond, serif';

    let fontWeight = weight === 'bold'
        ? 800
        : 400;
</script>

<style>
    label {
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.2em;
        color: #5F5B5B;
    }
</style>

<label style="
    font-size: {size}pt;
    font-family: {fontFamily};
    font-weight: {fontWeight};">
    {@render children?.()}
</label>

