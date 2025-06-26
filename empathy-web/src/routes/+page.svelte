<script>
    import HeroImage from "../atomic/molecules/HeroImage.svelte";
</script>

<style>
    div{
        height: 100%;
    }

</style>

<div class="flex flex-col w-full">
    <HeroImage name="About us" imageUrl="/home/about.svg" href="/about"/>
    <HeroImage name="Schedule" imageUrl="/home/schedule.svg" href="/schedule"/>
    <HeroImage name="Prices" imageUrl="/home/prices.svg" href="/prices"/>
    <HeroImage name="Services" imageUrl="/home/services.svg" href="/services"/>
</div>