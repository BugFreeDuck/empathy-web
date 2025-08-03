<script>
    import HeroImage from "../../atomic/molecules/HeroImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
    import FeedbackCarousel from "../../atomic/molecules/FeedbackCarousel.svelte";

    let headingSize = 24;
    let paragraphSize = 18;
</script>

<style>

</style>

<div class="flex flex-col w-full">
    <HeroImage title="we are empathy" imageUrl="about/we-are.png" separator/>

    <TextContainer>
        <Heading size={headingSize}>
            apie mus
        </Heading>
        <Paragraph size={paragraphSize}>
            Tai erdvė, kurioje pagrindiniai atspirties taškai yra <b>judesys, ryšys ir sąmoningumas.</b>
            Čia mes nesikoncentruojame į konkretų šokių stilių, bet mokomes judėti skirtingai, remiantis įvarių šokių
            stilių bazėmis.
            Didelis dėmesys skiriamas ryšiui su savimi ir su aplinka - improvizuojame, kūrybiškai dirbame grupėse,
            porose ir pavieniui. Nemažai laiko skiriama kūno stiprinimui remiantis pilateso ir klasikinio trenažo
            pagrindais. Ir žinoma, viskas vyksta saugioje, empatiškoje aplinkoje, kur skatinama pagarba tiek sau, tiek
            šalia esančiam.
        </Paragraph>
    </TextContainer>

    <HeroImage imageUrl="about/circle.png"/>

    <HeroImage imageUrl="about/teacher.png"
               sideTextHeader="m o k y t o j a"
               sideText="Olivija Kazakevičienė"/>

    <TextContainer>
        <Paragraph size="{paragraphSize}">
            Šoku nuo 7-rių metų ir esu įsitikinusi, kad šokis ir aplinka, kurioje šokau, turėjo didelę įtaką mano
            asmenybės formavimosi periode. Tai buvo ne vien fizinė veikla, tai buvo įrankis išmokti tvarkytis su savo
            emocijomis, pagalbininkas ugdantis ištvermę, atkaklumą ir savarankiškumą.
        </Paragraph>
        <Paragraph size="{paragraphSize}">
            <b>Empathy</b> erdvę įkūriau norėdama pasidalinti savo meile ir pajauta judesio atžvilgiu.
            Šioje erdvėje ne tik mokau, bet ir pati kiekvieną dieną mokausi iš savo mokinių, juk augimas yra beribis, o
            kai augi kartu su bendraminčiais, saugioje aplionkoje šis procesas tampa ypač malonus.
        </Paragraph>
    </TextContainer>

    <FeedbackCarousel/>

    <HeroImage imageUrl="about/group-hug.png" marginTop={-1.2} separator/>
</div>
