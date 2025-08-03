<script>
    import HeroImage from "../atomic/molecules/HeroImage.svelte";
</script>

<style>
    div {
        height: 100%;
    }
</style>

<div class="flex flex-col w-full">
    <HeroImage title="APIE MUS" imageUrl="./home/about.png" href="./about" animationDelay={100}/>
    <HeroImage title="TVARKARAŠTIS" imageUrl="./home/schedule.png" href="./schedule" animationDelay={200}/>
    <HeroImage title="KAINOS" imageUrl="./home/prices.png" href="./prices" animationDelay={300}/>
    <HeroImage title="PASLAUGOS" imageUrl="./home/services.png" href="./services" animationDelay={400}/>
</div>