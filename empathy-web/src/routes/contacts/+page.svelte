<svelte:head>
    <title>Empathy | Kontaktai</title>
</svelte:head>

<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import ContactsList from "../../atomic/molecules/ContactsList.svelte";
    import TextSocialLinks from "../../atomic/molecules/TextSocialLinks.svelte";
    import {mobileQueryState} from "$lib/mobileQuery.svelte.js";
    import EmbededGoogleMap from "../../atomic/organisms/EmbededGoogleMap.svelte";
</script>

<style>
    div {
        height: 100%;
        padding-top: 89px;
    }

    div.width-limit {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
    }
</style>


{#if mobileQueryState.isMobile}
    <div class="flex flex-col w-full gap-15">
        <WaveImage
                imageUrl="contacts/map.png"
                aspectRatio="395 / 261"
                marginTop={-5}
                href="https://maps.app.goo.gl/7QxLv15fd9TiXfL66"/>

        <ContactsList size="small" --flex-direction="column"/>
        <TextSocialLinks fontSize={16}/>
    </div>
{:else}

    <div class="flex flex-col w-full gap-15 width-limit">
        <ContactsList size="large" fullWidth --flex-direction="row"/>
        <EmbededGoogleMap/>
    </div>


{/if}
