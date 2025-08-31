<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import Label from "../../atomic/atoms/Text/Label.svelte";
    import {mobileQueryState} from "$lib/mobileQuery.svelte.js";
    import DesktopHeroImage from "../../atomic/molecules/DesktopHeroImage.svelte";
</script>

<style>
    div {
        height: 100%;
    }
</style>

{#if mobileQueryState.isMobile}
    <div class="flex flex-col w-full">
        <WaveImage grow={1} imageUrl="prices/one-lesson.png">
            <div class="flex flex-col h-full w-full items-center justify-center select-none">
                <Label font="marcellus" color="sand" size={46}>VIENA PAMOKA</Label>
                <Label font="redhat" color="sand" size={46}>€10</Label>
                <Label font="redhat" color="sand" size={20}>*bandomoji pamoka nemokama</Label>
            </div>
        </WaveImage>
        <WaveImage grow={1} imageUrl="prices/month.png">
            <div class="flex flex-col h-full w-full items-center justify-center select-none">
                <Label font="marcellus" color="sand" size={46}>MĖNUO</Label>
                <Label font="redhat" color="sand" size={46}>€60</Label>
                <Label font="redhat" color="sand" size={20}>*bandomoji pamoka nemokama</Label>
            </div>
        </WaveImage>
        <WaveImage grow={1} imageUrl="prices/individual.png">
            <div class="flex flex-col h-full w-full items-center justify-center select-none">
                <Label font="marcellus" color="sand" size={46}>INDIVIDUALI</Label>
                <Label font="redhat" color="sand" size={46}>€40</Label>
                <Label font="redhat" color="sand" size={20}>*1-2 mokiniai</Label>
            </div>
        </WaveImage>
    </div>
{:else}
    <div class="flex flex-row h-full w-full items-center ">
        <DesktopHeroImage imageUrl="./desktop/prices/one-lesson.png" animationDelay={100} noGreyscale>
            <div class="flex flex-col h-full w-full items-center justify-center select-none">
                <Label font="marcellus" color="sand" size={46}>VIENA PAMOKA</Label>
                <Label font="redhat" color="sand" size={46}>€10</Label>
                <Label font="redhat" color="sand" size={20}>*bandomoji pamoka nemokama</Label>
            </div>
        </DesktopHeroImage>
        <DesktopHeroImage imageUrl="./desktop/prices/month.png" animationDelay={200} noGreyscale>
            <div class="flex flex-col h-full w-full items-center justify-center select-none">
                <Label font="marcellus" color="sand" size={46}>MĖNUO</Label>
                <Label font="redhat" color="sand" size={46}>€60</Label>
                <Label font="redhat" color="sand" size={20}>*bandomoji pamoka nemokama</Label>
            </div>
        </DesktopHeroImage>
        <DesktopHeroImage imageUrl="./desktop/prices/individual.png" animationDelay={300} noGreyscale>
            <div class="flex flex-col h-full w-full items-center justify-center select-none">
                <Label font="marcellus" color="sand" size={46}>INDIVIDUALI</Label>
                <Label font="redhat" color="sand" size={46}>€40</Label>
                <Label font="redhat" color="sand" size={20}>*1-2 mokiniai</Label>
            </div>
        </DesktopHeroImage>
    </div>
{/if}


