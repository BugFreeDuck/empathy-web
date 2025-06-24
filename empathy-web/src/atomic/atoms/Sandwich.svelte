<script lang="ts">
    interface Props {
        isOpen: boolean
    }

    let { isOpen = $bindable(false) }: Props = $props();

    function toggle(){
        isOpen = !isOpen;
    }

</script>

<style>
    button.sandwich {
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

    button.cross {
        position: absolute;

        top: 2em;
        right: 2em;

        width: 24px;
        height: 20px;
        background-image: url("/cross.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>

<button class:sandwich={!isOpen}
        class:cross={isOpen}
        aria-label="sandwich"
        onclick={() => toggle()}>
</button>
