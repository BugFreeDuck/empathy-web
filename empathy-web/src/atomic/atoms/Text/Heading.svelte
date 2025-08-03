<script lang="ts">
    import {parseRenderParameters, type TextProps} from "./common";

    let props: TextProps = $props();
    let {size, font, weight, color, alignment} = parseRenderParameters(props);
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
    font-size: {size}px;
    font-family: {font};
    font-weight: {weight};
    text-align: {alignment};
    color: {color};">
    {@render props.children?.()}
</h1>

