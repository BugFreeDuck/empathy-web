<script>
    import WaveImage from "../../atomic/molecules/WaveImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
    import FeedbackCarousel from "../../atomic/molecules/FeedbackCarousel.svelte";
    import RegisterButton from "../../atomic/atoms/RegisterButton.svelte";

    let headingSize = 24;
    let paragraphSize = 16;
</script>

<style>

</style>

<div class="flex flex-col w-full">
    <WaveImage title="We are empathy" imageUrl="about/we-are.png" separator/>

    <TextContainer>
        <Heading size={headingSize} font="marcellus">
            Apie mus
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

    <WaveImage imageUrl="about/circle.png"/>

    <WaveImage imageUrl="about/teacher.png"
               sideTextHeader="M o k y t o j a"
               sideText="Olivija Kazakevičienė"
               marginTop={-6}/>

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

    <RegisterButton/>

    <FeedbackCarousel/>

    <WaveImage imageUrl="about/group-hug.png" marginTop={-5} separator/>
</div>
