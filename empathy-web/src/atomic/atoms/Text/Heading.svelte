<script lang="ts">
    import {parseRenderParameters, type TextProps} from "./common";

    let props: TextProps = $props();
    let {size, font, weight, color} = parseRenderParameters(props);
</script>

<style>
    h1 {
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.2em;
    }
</style>

<h1 style="
    font-size: {size}pt;
    font-family: {font};
    font-weight: {weight};
    color: {color};">
    {@render props.children?.()}
</h1>

