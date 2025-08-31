<script lang="ts">
    import {parseRenderParameters, type TextProps} from "./common";

    let props: TextProps = $props();
    let {
        font,
        weight,
        color,
        alignment,
    } = parseRenderParameters(props as TextProps);

</script>

<style>
    label {
        font-optical-sizing: auto;
        font-weight: 400;
        font-size: calc(1px * var(--min-size));
        font-style: normal;
        letter-spacing: var(--letter-spacing);
    }

    @media screen and (min-width: 1000px) {
        label {
            font-size: calc(1px * var(--min-size) + (var(--max-size) - var(--min-size)) * ((100vw - 1000px) / (1000 - 600)));
        }
    }

    @media screen and (min-width: 1400px) {
        label {
            font-size: calc(1px * var(--max-size));
        }
    }
</style>

<label style="
    font-family: {font};
    font-weight: {weight};
    text-align: {alignment};
    color: {color};">
    {@render props.children?.()}
</label>

