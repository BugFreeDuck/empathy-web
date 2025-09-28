<svelte:head>
    <title>Empathy | Apie Mus</title>
</svelte:head>

<script lang="ts">
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
    import FeedbackCarousel from "../../atomic/molecules/FeedbackCarousel.svelte";
    import RegisterButton from "../../atomic/atoms/RegisterButton.svelte";
    import {mobileQueryState} from "$lib/mobileQuery.svelte.js";
    import DesktopRectangleImage from "../../atomic/molecules/DesktopRectangleImage.svelte";
    import DesktopFeedbackCarousel from "../../atomic/molecules/DesktopFeedbackCarousel.svelte";

    let headingSize = 24;
    let paragraphSize = 16;

    let desktopHeadingSize = 60;
    let desktopParagraphSize = 20;

</script>

{#if mobileQueryState.isMobile}
    <div class="flex flex-col w-full">
        <WaveImage title="We are empathy" imageUrl="about/we-are.png" separator/>

        <TextContainer>
            <Heading size={headingSize} font="marcellus">
                Apie mus
            </Heading>
            <Paragraph size={paragraphSize}>
                Tai erdvė, kurioje pagrindiniai atspirties taškai yra <b>judesys, ryšys ir sąmoningumas.</b>
                Čia mes nesikoncentruojame į konkretų šokių stilių, bet mokomes judėti skirtingai, remiantis įvarių
                šokių
                stilių bazėmis.
                Didelis dėmesys skiriamas ryšiui su savimi ir su aplinka - improvizuojame, kūrybiškai dirbame grupėse,
                porose ir pavieniui. Nemažai laiko skiriama kūno stiprinimui remiantis pilateso ir klasikinio trenažo
                pagrindais. Ir žinoma, viskas vyksta saugioje, empatiškoje aplinkoje, kur skatinama pagarba tiek sau,
                tiek
                šalia esančiam.
            </Paragraph>
        </TextContainer>

        <WaveImage imageUrl="about/circle.png"/>

        <WaveImage imageUrl="about/teacher.png"
                   sideTextHeader="M o k y t o j a"
                   sideText="Olivija Kazakevičienė"
                   marginTop={-6}/>

        <TextContainer>
            <Paragraph size="{paragraphSize}">
                Šoku nuo 7-rių metų ir esu įsitikinusi, kad šokis ir aplinka, kurioje šokau, turėjo didelę įtaką mano
                asmenybės formavimosi periode. Tai buvo ne vien fizinė veikla, tai buvo įrankis išmokti tvarkytis su
                savo
                emocijomis, pagalbininkas ugdantis ištvermę, atkaklumą ir savarankiškumą.
            </Paragraph>
            <Paragraph size="{paragraphSize}">
                <b>Empathy</b> erdvę įkūriau norėdama pasidalinti savo meile ir pajauta judesio atžvilgiu.
                Šioje erdvėje ne tik mokau, bet ir pati kiekvieną dieną mokausi iš savo mokinių, juk augimas yra
                beribis, o
                kai augi kartu su bendraminčiais, saugioje aplionkoje šis procesas tampa ypač malonus.
            </Paragraph>
        </TextContainer>

        <RegisterButton/>

        <FeedbackCarousel/>

        <WaveImage imageUrl="about/group-hug.png" marginTop={-5} separator/>
    </div>
{:else}
    <div class="flex flex-col w-full">
        <DesktopRectangleImage title="We are empathy" imageUrl="desktop/about/we-are.png"
                               --aspect-ratio="1440 / 317"
                               --max-height="317px"/>
    </div>

    <div class="flex w-full justify-center" style="min-height: 500px;">
        <div class="flex flex-row items-center justify-between" style="max-width: 1440px">
            <div class="basis-md m-10 text-nowrap flex-nowrap">
                <Heading size={desktopHeadingSize} font="marcellus">
                    apie mus
                </Heading>
            </div>
            <div class="basis-3xl m-10">
                <Paragraph size={desktopParagraphSize}>
                    Tai erdvė, kurioje pagrindiniai atspirties taškai yra <b>judesys, ryšys ir sąmoningumas.</b>
                    Čia mes nesikoncentruojame į konkretų šokių stilių, bet mokomes judėti skirtingai, remiantis įvarių
                    šokių
                    stilių bazėmis.
                    Didelis dėmesys skiriamas ryšiui su savimi ir su aplinka - improvizuojame, kūrybiškai dirbame
                    grupėse,
                    porose ir pavieniui. Nemažai laiko skiriama kūno stiprinimui remiantis pilateso ir klasikinio
                    trenažo
                    pagrindais. Ir žinoma, viskas vyksta saugioje, empatiškoje aplinkoje, kur skatinama pagarba tiek
                    sau,
                    tiek
                    šalia esančiam.
                </Paragraph>
            </div>
        </div>
    </div>

    <div class="flex flex-col w-full h-full">
        <DesktopRectangleImage
                imageUrl="desktop/about/test.png"
                --aspect-ratio="1440 / 1265"
                --height="1265px">

            <div class="w-full h-full grid grid-cols-[45%_55%] grid-rows-2 items-center overflow-hidden">
                <div class="col-2 row-2 pr-20 overflow-hidden" style="max-height: 450px">
                    <Heading font="marcellus" color="black" size={26} --text-wrap="nowrap">mokytoja / OLIVIJA
                        KAZAKEVIČIENĖ
                    </Heading>
                    <Paragraph size="{desktopParagraphSize}">
                        Šoku nuo 7-rių metų ir esu įsitikinusi, kad šokis ir aplinka, kurioje šokau, turėjo didelę įtaką
                        mano
                        asmenybės formavimosi periode. Tai buvo ne vien fizinė veikla, tai buvo įrankis išmokti
                        tvarkytis su
                        savo
                        emocijomis, pagalbininkas ugdantis ištvermę, atkaklumą ir savarankiškumą.
                    </Paragraph>
                    <Paragraph size="{desktopParagraphSize}">
                        <b>Empathy</b> erdvę įkūriau norėdama pasidalinti savo meile ir pajauta judesio atžvilgiu.
                        Šioje erdvėje ne tik mokau, bet ir pati kiekvieną dieną mokausi iš savo mokinių, juk augimas yra
                        beribis, o
                        kai augi kartu su bendraminčiais, saugioje aplionkoje šis procesas tampa ypač malonus.
                    </Paragraph>
                </div>
            </div>
        </DesktopRectangleImage>
    </div>

    <div class="flex flex-col w-full h-full items-center">
        <div class="w-full h-full flex flex-row items-center justify-around" style="max-width: 1600px; z-index:2">
            <div>
                <DesktopFeedbackCarousel/>
            </div>
            <div class="">
                <Heading font="marcellus" color="black" size={desktopHeadingSize} alignment="center"
                         --text-wrap="nowrap">atsiliepimai
                </Heading>
            </div>
        </div>
    </div>

    <div class="flex flex-col w-full">
        <DesktopRectangleImage imageUrl="desktop/about/group-hug.png"
                               --aspect-ratio="1440 / 680"
                               --max-height="680px"/>
    </div>
{/if}