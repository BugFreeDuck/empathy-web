<svelte:head>
    <title>Empathy | Tvarkaraštis</title>
</svelte:head>

<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import ScheduleTable from "../../atomic/organisms/ScheduleTable.svelte";
    import RegisterButton from "../../atomic/atoms/RegisterButton.svelte";
    import {mobileQueryState} from "$lib/mobileQuery.svelte.js";
    import DesktopRectangleImage from "../../atomic/molecules/DesktopRectangleImage.svelte";
    import DesktopScheduleTable from "../../atomic/organisms/DesktopScheduleTable.svelte";
    import RegisterButtonBlob from "../../atomic/atoms/RegisterButtonBlob.svelte";
</script>

<style>
    div.width-limit {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
    }

    ul{
        list-style-type: disc;
        font-family: Red Hat Display, sans-serif;
        font-size: 16px;
        color: #5F5B5B;
        margin-left: 5em;
    }

</style>

{#if mobileQueryState.isMobile}
    <div class="flex flex-col w-full">
        <WaveImage title="Tvarkaraštis" imageUrl="schedule/schedule.png" separator/>

        <ScheduleTable address="EITMINŲ G. 20"/>

        <RegisterButton/>
    </div>
{:else}
    <div class="h-full">

        <div class="flex flex-col w-full">
            <DesktopRectangleImage title="tvarkaraštis" imageUrl="desktop/schedule/schedule.png"
                                   --aspect-ratio="1440 / 317"
                                   --max-height="317px"/>
        </div>

        <div class="width-limit h-auto grid grid-cols-[50%_50%] grid-rows-1  justify-center overflow-hidden mt-20">
            <DesktopScheduleTable/>
            <div>
                <ul>
                    <li>Pamokos vyksta adresu <b>Eitminų g.20</b> (nuo lapkričio mėnesio Gabijos g. 38)</li>
                    <li>MINI pamokos trunka <b>45 min.</b></li>
                    <li>Naujiems nariams pirma pamoka <b>NEMOKAMA</b></li>
                </ul>
                <RegisterButtonBlob/>
            </div>
        </div>
    </div>
{/if}
