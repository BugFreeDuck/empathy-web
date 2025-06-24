<script lang="ts">
    interface Props {
        text: string
    }

    let {text}: Props = $props();

</script>

<style>
    p.logo-text{
        font-size: 18pt;
        font-family: "Arsenal", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.2em;
        color: #5F5B5B;
    }

    p.logo-subtext{
        font-size: 12pt;
        font-family: "Cormorant Garamond", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: #5F5B5B;
    }

</style>

{#if type === 'logo-text'}
    <p class="logo-text">
        {@render children?.()}
    </p>
{:else if type === 'logo-subtext'}
    <p class="logo-subtext">
        {@render children?.()}
    </p>
{/if}
