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
    <HeroImage name="One lesson"
               imageUrl="/prices/one-lesson.png"/>
    <HeroImage name="Month"
               imageUrl="/prices/month.png"/>
    <HeroImage name="Individual"
               imageUrl="/prices/individual.png"/>
</div>
