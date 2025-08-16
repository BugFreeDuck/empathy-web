<script lang="ts">
    import {parseRenderParameters, type TextProps} from "./common";

    let props: TextProps = $props();
    let {font, weight, color, alignment} = parseRenderParameters(props);
</script>

<style>
    label {
        font-optical-sizing: auto;
        font-weight: 400;
        font-size: 10px;
        font-style: normal;
        letter-spacing: 0;
    }

    @media screen and (min-width: 1000px) {
        label {
            font-size: calc(10px + (20 - 10) * ((100vw - 1000px) / (1000 - 600)));
        }
    }

    @media screen and (min-width: 1400px) {
        label {
            font-size: 20px;
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

