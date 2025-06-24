<script lang="ts">
    interface Props {
        text: string
    }

    let {text}: Props = $props();

</script>

<style>

</style>

<button>
    {text}
</button>