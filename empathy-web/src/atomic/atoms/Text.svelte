<script lang="ts">
    import type {Snippet} from "svelte";

    type TextType = 'logo-text' | 'logo-subtext' | 'footer';

    interface Props {
        type: TextType,
        children?: Snippet
    }

    let {type, children}: Props = $props();

</script>

<style>
    label.logo-text{
        font-size: 18pt;
        font-family: "Arsenal", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.2em;
        color: #5F5B5B;
    }

    label.logo-subtext{
        font-size: 12pt;
        font-family: "Cormorant Garamond", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: #5F5B5B;
    }

    label.footer{
        font-size: 12pt;
        line-height: 15pt;
        font-family: "Arsenal", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.2em;
        color: #5F5B5B;
    }

</style>

{#if type === 'logo-text'}
    <label class="logo-text">
        {@render children?.()}
    </label>
{:else if type === 'logo-subtext'}
    <label class="logo-subtext">
        {@render children?.()}
    </label>
{:else if type === 'footer'}
    <label class="footer">
        {@render children?.()}
    </label>
{/if}
