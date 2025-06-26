<script lang="ts">
    interface Props {
        isOpen: boolean
    }

    let { isOpen = $bindable(true) }: Props = $props();

    function toggle(){
        isOpen = !isOpen;
    }

</script>

<style>
    button{
        position: absolute;

        top: 2em;
        right: 2em;

        width: 24px;
        height: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    button.sandwich {
        background-image: url("/icons/sandwich.svg");
    }

    button.cross {
        background-image: url("/icons/cross.svg");
    }

</style>

<button class:sandwich={!isOpen}
        class:cross={isOpen}
        aria-label="sandwich"
        onclick={() => toggle()}>
</button>
