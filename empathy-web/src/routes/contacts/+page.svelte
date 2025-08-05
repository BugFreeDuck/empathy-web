<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
    import ContactsList from "../../atomic/molecules/ContactsList.svelte";
    import TextSocialLinks from "../../atomic/molecules/TextSocialLinks.svelte";
</script>

<style>
    div{
        height: 105%;
    }
</style>

<div class="flex flex-col w-full justify-between">
    <WaveImage
            imageUrl="contacts/map.png"
            aspectRatio="395 / 261"
            marginTop={-4}
            href="https://maps.app.goo.gl/7QxLv15fd9TiXfL66"/>


    <ContactsList/>
    <TextSocialLinks/>

    <WaveImage
            imageUrl="contacts/enterance.png"
            aspectRatio="402 / 265"/>
</div>
