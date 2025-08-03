<script>
    import HeroImage from "../atomic/molecules/HeroImage.svelte";
</script>

<style>
</style>

<div class="flex flex-col w-full">
    <HeroImage title="APIE MUS" imageUrl="./home/about.png" href="./about" animationDelay={100} grow={0}/>
    <HeroImage title="TVARKARAŠTIS" imageUrl="./home/schedule.png" href="./schedule" animationDelay={200} grow={0}/>
    <HeroImage title="KAINOS" imageUrl="./home/prices.png" href="./prices" animationDelay={300} grow={0}/>
    <HeroImage title="KONTAKTAI" imageUrl="./home/services.png" href="./contacts" animationDelay={400} grow={0}/>
</div>