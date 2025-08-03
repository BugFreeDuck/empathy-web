<script lang="ts">
    import {parseRenderParameters, type TextProps} from "./common";

    let props: TextProps = $props();
    let {size, font, weight, color} = parseRenderParameters(props);
</script>

<style>
    p {
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0;
        margin-top: 1em;
        text-align: justify;
    }
</style>

<p style="
    font-size: {size}px;
    font-family: {font};
    font-weight: {weight};
    color: {color};">
    {@render props.children?.()}
</p>

