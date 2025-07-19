<script>
    import HeroImage from "../atomic/molecules/HeroImage.svelte";
</script>

<style>
    div {
        height: 100%;
    }
</style>

<div class="flex flex-col w-full">
    <HeroImage name="ABOUT US" imageUrl="./home/about.png" href="./about" animationDelay={100}/>
    <HeroImage name="SCHEDULE" imageUrl="./home/schedule.png" href="./schedule" animationDelay={200}/>
    <HeroImage name="PRICES" imageUrl="./home/prices.png" href="./prices" animationDelay={300}/>
    <HeroImage name="SERVICES" imageUrl="./home/services.png" href="./services" animationDelay={400}/>
</div>