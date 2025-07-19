<script lang="ts">
    import Heading from "../atoms/Text/Heading.svelte";
    import Paragraph from "../atoms/Text/Paragraph.svelte";
    import Label from "../atoms/Text/Label.svelte";

    type CarouselItem = {
        text: string,
        name: string,
        personTitle: string
    }

    let items: CarouselItem[] = [
        {
            text: 'Negalėčiau įsivaizduoti geresnės vietos, kur galėčiau augti tiek šokyje, tiek kaip asmenybė.',
            name: 'RUGILĖ',
            personTitle: 'mokinė'
        },
        {
            text: 'Labai noriu padėkoti mūsų nuostabiai trenerei Olivijai, kuri nuoširdžiai atsiduoda savo darbui ir stengiasi, jog visi jaustųsi priimti. Jos dėka supratau, kad klysti kartais irgi yra gerai.',
            name: 'EMILIJA',
            personTitle: 'mokinė'
        },
        {
            text: 'Labai nuoširdi, darbšti ir kūrybinga šokių mokytoja Olivija, kurią labai pamilome. Šokiai dukrai lyg terapija, visada grįžta pilna įspūdžių ir gerai pasitreniravusi. Labai motyvuojantis būrelis vaikams, puiki vieta. ',
            name: 'JOANA',
            personTitle: 'mokinės mama'
        }
    ]

    let activeItemIdx = $state(0);

    function next() {
        console.log('next');
        if (activeItemIdx + 1 >= items.length) {
            activeItemIdx = 0;
        } else {
            activeItemIdx++;
        }
    }

    function previous() {
        console.log('previous');
        if (activeItemIdx - 1 <= 0) {
            activeItemIdx = items.length - 1;
        } else {
            activeItemIdx--;
        }
    }

</script>

<style>
    .carousel {
        position: relative;

        aspect-ratio: 402/261;
        max-height: 261px;
        background-image: url("/about/feedback-bg.png");
        background-size: cover;

        margin-top: 1em;
    }

    .carousel-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        height: 100%;
        padding: 2em 3em;

        text-align: center;
    }

    button {
        position: absolute;
        height: 22px;
        aspect-ratio: 12 / 22;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 5;
    }

    button.previous {
        left: 1em;
        top: 50%;
        background-image: url("/icons/arrow-left.png");
    }

    button.next {
        background-image: url("/icons/arrow-right.png");
        right: 1em;
        top: 50%;
    }
</style>

<div class="flex flex-col items-center">
    <Heading weight="bold" size="20">atsiliepimai</Heading>

    <div class="carousel">
        <button class="previous" aria-label="Previous feedback" onclick={() => previous()}></button>
        <div class="carousel-item">
            <Label size={16}>{items[activeItemIdx].text}</Label>

            <div class="flex flex-col items-center">
                <img src="/icons/heart.png" alt=""/>
                <Label size={20}>{items[activeItemIdx].name}</Label>
                <Label size={18}>{items[activeItemIdx].personTitle}</Label>
            </div>
        </div>
        <button class="next" aria-label="Next feedback" onclick={() => next()}></button>
    </div>
</div>