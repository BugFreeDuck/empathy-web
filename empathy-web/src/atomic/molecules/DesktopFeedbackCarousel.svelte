<script lang="ts">
    import {Splide, SplideSlide, SplideTrack} from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    import DynamicSizeLabel from "../atoms/Text/DynamicSizeLabel.svelte";

    type CarouselItem = {
        id: number;
        text: string,
        name: string,
        personTitle: string
    }

    let carousel: Splide;

    let items: CarouselItem[] = [
        {
            id: 1,
            text: 'Negalėčiau įsivaizduoti geresnės vietos, kur galėčiau augti tiek šokyje, tiek kaip asmenybė.',
            name: 'RUGILĖ',
            personTitle: 'mokinė'
        },
        {
            id: 2,
            text: 'Labai noriu padėkoti mūsų nuostabiai trenerei Olivijai, kuri nuoširdžiai atsiduoda savo darbui ir stengiasi, jog visi jaustųsi priimti. Jos dėka supratau, kad klysti kartais irgi yra gerai.',
            name: 'EMILIJA',
            personTitle: 'mokinė'
        },
        {
            id: 3,
            text: 'Labai nuoširdi, darbšti ir kūrybinga šokių mokytoja Olivija, kurią labai pamilome. Šokiai dukrai lyg terapija, visada grįžta pilna įspūdžių ir gerai pasitreniravusi. Labai motyvuojantis būrelis vaikams, puiki vieta. ',
            name: 'JOANA',
            personTitle: 'mokinės mama'
        },
        {
            id: 4,
            text: 'Nuostabi mokytoja, nuostabi atmosfera, nuostabi bendruomenė. Vaikas visuomet noriai laukia treniruotės bei grįžta su šypsena bei motyvacija tobulėjimui.',
            name: 'AUGUSTĖ',
            personTitle: 'mokinės mama'
        },
        {
            id: 5,
            text: 'Nuostabi mokytoja kuri moka sudominti ir įkvėpti vaikus. Didelis Jums Ačiu!',
            name: 'ELMYRA',
            personTitle: 'mokinės mama'
        },
        {
            id: 6,
            text: 'Puikūs šokiai moterims! Įkvepia moteriškumo ir pasitikėjimo!',
            name: 'AISTĖ',
            personTitle: 'LADY mokinė'
        }
    ];

</script>

<style>
    .carousel-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        height: 100%;

        padding: 0 2em;
        gap: 1em;

        text-align: center;
    }

    :global(.custom-carousel-desktop) {
        aspect-ratio: 1083/764;
        width: clamp(500px, 50vw, 1000px);
        height: 100%;
        overflow: visible;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        background-image: url("/desktop/about/feedback-bg.png");
        background-size: contain;
        background-repeat: no-repeat;

        margin-top: -5em;
        margin-bottom: -5em;

        padding-top: clamp(100px ,10vw, 300px);
        padding-bottom: clamp(120px, 5vw, 220px);
        padding-right: clamp(100px, 13vw, 200px);
        padding-left: clamp(100px, 5vw, 200px);
    }

    /*:global(.custom-splide-track) {*/
    /*    height: 80%;*/
    /*    margin-bottom: 1em;*/
    /*}*/

    :global(.splide__pagination) {
        position: relative;
        margin-top: 1em;
    }

    button.splide__arrow {
        display: none;
    }

    /*button.splide__arrow {*/
    /*    height: 22px;*/
    /*    aspect-ratio: 12 / 22;*/
    /*    background: none no-repeat center;*/
    /*}*/

    /*button.splide__arrow--prev {*/
    /*    left: 1em;*/
    /*    top: 50%;*/
    /*    background-image: url("/icons/arrow-left.png");*/
    /*}*/

    /*button.splide__arrow--next {*/
    /*    background-image: url("/icons/arrow-right.png");*/
    /*    right: 1em;*/
    /*    top: 50%;*/
    /*}*/
</style>


<Splide class="custom-carousel-desktop"
        aria-label="Svelte Splide Example"
        options={{type: "loop", autoHeight: true}}
        hasTrack={false}
        bind:this={carousel}
>
    <SplideTrack class="custom-splide-track">
        {#each items as item (item.id)}
            <SplideSlide>
                <div class="carousel-item">
                    <div class="flex flex-col items-center justify-center">
                        <DynamicSizeLabel alignment="center" --min-size="10" --max-size="20">{item.text}</DynamicSizeLabel>
                    </div>

                    <div class="flex flex-col items-center gap-5">
                        <img src="icons/heart.png" alt=""/>
                        <DynamicSizeLabel --min-size="10" --max-size="20">{item.name} / {item.personTitle}</DynamicSizeLabel>
                    </div>
                </div>
            </SplideSlide>
        {/each}
    </SplideTrack>

    <div class="splide__arrows">
        <button aria-label="previous" class="splide__arrow splide__arrow--prev"></button>
        <button aria-label="next" class="splide__arrow splide__arrow--next"></button>
    </div>
</Splide>
