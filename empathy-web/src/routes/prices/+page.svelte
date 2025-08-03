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
    <HeroImage title="One lesson"
               imageUrl="/prices/one-lesson.png"/>
    <HeroImage title="Month"
               imageUrl="/prices/month.png"/>
    <HeroImage title="Individual"
               imageUrl="/prices/individual.png"/>
</div>
