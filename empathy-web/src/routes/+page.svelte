<script>
    import HeroImage from "../atomic/molecules/HeroImage.svelte";
</script>

<style>
    div {
        height: 100%;
    }
</style>

<div class="flex flex-col w-full">
    <HeroImage name="About us" imageUrl="/home/about.png" href="/about"/>
    <HeroImage name="Schedule" imageUrl="/home/schedule.png" href="/schedule"/>
    <HeroImage name="Prices" imageUrl="/home/prices.png" href="/prices"/>
    <HeroImage name="Services" imageUrl="/home/services.png" href="/services"/>
</div>