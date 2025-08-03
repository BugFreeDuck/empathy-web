<script>
    import HeroImage from "../../atomic/molecules/HeroImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
    import ScheduleTable from "../../atomic/organisms/ScheduleTable.svelte";
    import RegisterButton from "../../atomic/atoms/RegisterButton.svelte";
</script>

<style>

</style>

<div class="flex flex-col w-full">
    <HeroImage title="schedule" imageUrl="schedule/schedule.png" separator/>

    <ScheduleTable address="EITMINŲ G. 20"/>

    <div class="mb-10 flex justify-center">
        <RegisterButton/>
    </div>
</div>
