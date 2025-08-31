<script lang="ts">
    import DynamicSizeLabel from "./Text/DynamicSizeLabel.svelte";
</script>

<style>
    div {
        position: absolute;

        aspect-ratio: 691/575;
        width: 800px;
        width: clamp(400px, 50vw, 800px);
        overflow: visible;

        background-image: url("/desktop/blob-button.svg");
        background-size: cover;
        background-repeat: no-repeat;

        margin-top: -3em;
        padding-right: 6em;
    }

</style>

<div class="mb-10 flex justify-center items-center">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScEL6M-bLxUNIufIX8MuHm9402mSsuWmaiHDPRR94OV89lQ2w/viewform"
       class="px-6 rounded-full">
        <DynamicSizeLabel font="marcellus" color="black"
                          --letter-spacing="0.3em"
                          --min-size="20"
                          --max-size="46">
            registracija
        </DynamicSizeLabel>
    </a>
</div>
