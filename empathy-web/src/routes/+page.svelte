<script>
    import RectangleImage from "../atomic/molecules/RectangleImage.svelte";
    import {mobileQueryState} from "$lib/mobileQuery.svelte.js";
    import DesktopHeroImage from "../atomic/molecules/DesktopHeroImage.svelte";

</script>

<style>
    div.mobile {
        height: 100%;
    }
</style>

{#if mobileQueryState.isMobile}
    <div class="mobile flex flex-col w-full">
        <RectangleImage title="APIE MUS" imageUrl="./home/about.png" href="./about" animationDelay={100}/>
        <RectangleImage title="TVARKARAŠTIS" imageUrl="./home/schedule.png" href="./schedule" animationDelay={200}/>
        <RectangleImage title="KAINOS" imageUrl="./home/prices.png" href="./prices" animationDelay={300}/>
        <RectangleImage title="KONTAKTAI" imageUrl="./home/services.png" href="./contacts" animationDelay={400}/>
    </div>
{:else}
    <div class="flex flex-row h-full w-full items-center ">
        <DesktopHeroImage title="APIE MUS" imageUrl="./desktop/home/about.png" href="./about" animationDelay={100}/>
        <DesktopHeroImage title="TVARKARAŠTIS" imageUrl="./desktop/home/schedule.png" href="./schedule" animationDelay={200}/>
        <DesktopHeroImage title="KAINOS" imageUrl="./desktop/home/prices.png" href="./prices" animationDelay={300}/>
        <DesktopHeroImage title="KONTAKTAI" imageUrl="./desktop/home/services.png" href="./contacts" animationDelay={400}/>
    </div>
{/if}