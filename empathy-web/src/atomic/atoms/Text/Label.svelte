<script lang="ts">
    import {parseRenderParameters, type TextProps} from "./common";

    let props: TextProps = $props();
    let {size, font, weight, color, alignment} = parseRenderParameters(props);
</script>

<style>
    label {
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0;
    }
</style>

<label style="
    font-size: {size}px;
    font-family: {font};
    font-weight: {weight};
    text-align: {alignment};
    color: {color};">
    {@render props.children?.()}
</label>

