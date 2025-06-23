<script lang="ts">
    interface Props {
        onclick: () => void,
    }

    let { onclick }: Props = $props();

</script>

<style>
    button {
        position: absolute;

        top: 2em;
        right: 2em;

        width: 24px;
        height: 20px;
        background-image: url("/sandwich.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>

<button class="sandwich"
        aria-label="sandwich"
        onclick={() => onclick()}>
</button>
