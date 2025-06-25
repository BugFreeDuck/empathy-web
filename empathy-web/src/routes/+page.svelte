<script>
    import HeroImage from "../atomic/molecules/HeroImage.svelte";
</script>

<style>
    div{
        height: 100%;
    }

</style>

<div class="flex flex-col w-full">
    <HeroImage section="about-us"/>
    <HeroImage section="schedule"/>
    <HeroImage section="prices"/>
    <HeroImage section="services"/>
</div>