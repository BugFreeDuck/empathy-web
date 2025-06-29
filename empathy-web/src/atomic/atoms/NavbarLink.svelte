<script lang="ts">
    interface Props {
        text: string
        route: string
    }

    let {text, route}: Props = $props();

</script>

<style>
    a{
        font-size: 36pt;
        line-height: 36pt;
        font-family: "Arsenal", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: #5F5B5B;
    }
</style>

<a href="./{route}">
    {text}
</a>