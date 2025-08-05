<script lang="ts">
    let { children } = $props();
</script>

<style>
    div.text-container{
        margin-left: 2em;
        margin-right: 2em;
        margin-bottom: 2em;
    }
</style>

<div class="text-container">
    {@render children?.()}
</div>