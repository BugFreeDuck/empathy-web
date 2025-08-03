<script>
    import HeroImage from "../../atomic/molecules/HeroImage.svelte";
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
    <HeroImage grow={1} imageUrl="prices/one-lesson.png"/>
    <HeroImage grow={1} imageUrl="prices/month.png"/>
    <HeroImage grow={1} imageUrl="prices/individual.png"/>
</div>
