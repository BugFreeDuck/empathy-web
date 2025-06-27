<script>
    import HeroImage from "../../atomic/molecules/HeroImage.svelte";
    import Heading from "../../atomic/atoms/Text/Heading.svelte";
    import TextContainer from "../../atomic/molecules/TextContainer.svelte";
    import Paragraph from "../../atomic/atoms/Text/Paragraph.svelte";
</script>

<style>

</style>

<div class="flex flex-col w-full">
    <HeroImage name="About us"
               title="we are empathy"
               imageUrl="/about/we-are.png"
               separator/>

    <TextContainer>
        <Heading size={18}>
            about us
        </Heading>
        <Paragraph size={10}>
            Tai erdvė, kurioje pagrindiniai atspirties taškai yra <b>judesys, ryšys ir sąmoningumas.</b>
            Čia mes nesikoncentruojame į konkretų šokių stilių, bet mokomes judėti skirtingai, remiantis įvarių šokių stilių bazėmis.
            Didelis dėmesys skiriamas ryšiui su savimi ir su aplinka - improvizuojame, kūrybiškai dirbame grupėse, porose ir pavieniui. Nemažai laiko skiriama kūno stiprinimui remiantis pilateso ir klasikinio trenažo pagrindais. Ir žinoma, viskas vyksta saugioje, empatiškoje aplinkoje, kur skatinama pagarba tiek sau, tiek šalia esančiam.
        </Paragraph>
    </TextContainer>

    <HeroImage name="Dancer circle"
               imageUrl="/about/circle.png"
               separator/>

    <TextContainer>
        <Heading size={18}>
            teacher
        </Heading>
        <Paragraph size={10}>
           Olivija Kazakevičienė
        </Paragraph>
    </TextContainer>

    <HeroImage name="Dancer circle"
               imageUrl="/about/teacher.png"
               separator/>

    <TextContainer>
        <Paragraph size={10}>
            Šoku nuo 7-rių metų ir esu įsitikinusi, kad šokis ir aplinka, kurioje šokau, turėjo didelę įtaką mano asmenybės formavimosi periode. Tai buvo ne vien fizinė veikla, tai buvo įrankis išmokti tvarkytis su savo emocijomis, pagalbininkas ugdantis ištvermę, atkaklumą ir savarankiškumą.  e m p a t h y  erdvę įkūriau norėdama pasidalinti savo meile ir pajauta judesio atžvilgiu.
            Šioje erdvėje ne tik mokau, bet ir pati kiekvieną dieną mokausi iš savo mokinių, juk augimas yra beribis, o kai augi kartu su bendraminčiais, saugioje aplionkoje šis procesas tampa ypač malonus.
        </Paragraph>
    </TextContainer>
</div>
