<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
    import ScheduleTable from "../../atomic/organisms/ScheduleTable.svelte";
    import RegisterButton from "../../atomic/atoms/RegisterButton.svelte";
</script>

<style>

</style>

<div class="flex flex-col w-full">
    <WaveImage title="tvarkaraštis" imageUrl="schedule/schedule.png" separator/>

    <ScheduleTable address="EITMINŲ G. 20"/>

    <RegisterButton/>
</div>
