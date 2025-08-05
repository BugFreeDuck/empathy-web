<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
</script>

<style>
    div {
        height: 100%;
    }
</style>

<div class="flex flex-col w-full">
    <WaveImage grow={1} imageUrl="prices/one-lesson.png"/>
    <WaveImage grow={1} imageUrl="prices/month.png"/>
    <WaveImage grow={1} imageUrl="prices/individual.png"/>
</div>
