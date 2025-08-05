<script>
    import RectangleImage from "../atomic/molecules/RectangleImage.svelte";
</script>

<style>
    div{
        height: 100%;
    }
</style>

<div class="flex flex-col w-full">
    <RectangleImage title="APIE MUS" imageUrl="./home/about.png" href="./about" animationDelay={100}/>
    <RectangleImage title="TVARKARAŠTIS" imageUrl="./home/schedule.png" href="./schedule" animationDelay={200}/>
    <RectangleImage title="KAINOS" imageUrl="./home/prices.png" href="./prices" animationDelay={300}/>
    <RectangleImage title="KONTAKTAI" imageUrl="./home/services.png" href="./contacts" animationDelay={400}/>
</div>