<template>
    <Heading></Heading>
    <BlocksImageCircleLeft title="Castor grooming" imageSrc="nele.jpeg" :content="introText">
        <Button>Boek een afspraak</Button>
        <Button variant="secondary" to="/het-salon">Ontdek het salon</Button>
    </BlocksImageCircleLeft>
    <BlocksBanner class=" lg:-mt-32">
        <section aria-label="services"
            class="container flex flex-column md:flex-row flex-wrap md:justify-center lg:gap-5">
            <BlocksService class="w-11/12 mx-auto md:w-3/12" v-for="service in services" :title="service.title"
                :content="service.intro">
            </BlocksService>
            <div class="w-full text-center mt-5">
                <Button to="/behandelingen" variant="primary" class="mx-auto text-center">Ontdek behandeling</Button>
            </div>
        </section>
    </BlocksBanner>
    <BlocksBullets class=""></BlocksBullets>
    <section class="bg-primary-50 pt-72 pb-32 flex justify-center gap-20 -mt-56">
        <BlocksImageText class="w-3/12" imageSrc="cat-1.jpeg" position="left" title="Katten trimmen" text="Katten zijn van nature zeer verzorgende dieren, maar sommige rassen hebben
extra hulp nodig om hun vacht in topconditie te houden. Trimmen helpt niet
alleen om klitten en vervilting te voorkomen, maar het zorgt er ook voor dat de
huid goed kan ademenen en dat er geen ongemakkelijke of pijnlijke matten
ontstaan."><Button>Katten trimmer</Button>
        </BlocksImageText>

        <BlocksImageText class="w-3/12 mt-32" imageSrc="puppie.jpeg" position="right" title="Puppie gewenning" text="Veel huisdieren hebben een beetje tijd nodig om te wennen aan de nieuwe geluiden,
geuren en het omgaan met vreemde mensen in een trimsalon. Dit geldt met name
voor dieren die voor het eerst een trimbeurt ondergaan of die nog niet veel ervaring
hebben met een trimsalon. Gewenning helpt de stress te verminderen en zorgt
ervoor dat het trimproces soepeler verloopt.">
            <Button>Over salon gewenning</Button>
        </BlocksImageText>
    </section>

    <section>
        <div class="salonized-booking" data-company="Lo7t2jQiEu7pJC3tSXEhc5Mg" data-color="#bf046b" data-language="nl" data-height="700" data-inline="true" ></div>
    </section>
</template>
<script setup lang="ts">
definePageMeta({
    "title": "Castor Grooming | Home"
})
const introText = "Mijn naam is Nele Van de Wouwer, en ik ben de trotse eigenaar van Castor Grooming, een trimsalon voor honden en katten. Sinds 2016 heb ik ervaring en een passie voor dierenverzorging. Het is mijn missie om jouw huisdier met de grootste zorg en liefde te behandelen, zodat ze altijd weer stralend en gelukkig de salon verlaten. Als dierenliefhebber was het voor mij een logische keuze om de wereld van de trimsalon in te duiken. Sinds het begin heb ik mijn vak leren kennen met liefde, geduld en aandacht voor detail. Ik streef er altijd naar om elke trimbeurt zo stressvrij mogelijk te maken voor zowel het dier als de eigenaar. Mijn doel is niet alleen om jouw huisdier mooi en verzorgd te maken, maar ook om ervoor te zorgen dat ze zich op hun gemak voelen.";

const services = [
    {
        title: "Knippen en Scheren",
        intro:
            "Regelmatig knippen of scheren houdt de vacht van je hond in topvorm en bevordert de gezondheid van de vacht en huid.",
        volledigeOmschrijving:
            "Sommige honden hebben een vacht die regelmatig geknipt of geschoren moet worden om deze in topvorm te houden. Wij gebruiken de juiste technieken en materialen om jouw huisdier een frisse, nette look te geven. Dit is niet alleen voor esthetische doeleinden, maar ook om de gezondheid van de vacht en huid te bevorderen. Bij het knippen en scheren zorgen we ervoor dat de vacht op de juiste lengte wordt gebracht, afhankelijk van het ras en de behoefte van je huisdier. Voor langharige rassen of dieren die gevoelig zijn voor hitte, kan een kortere vacht een oplossing zijn voor hun comfort. We scheren met zorg, waarbij we altijd de gezondheid van je huisdier in gedachten houden.",
    },
    {
        title: "Trimmen en Plukken",
        intro:
            "Speciaal voor honden met een plukvacht, zoals terriërs, waarbij dode haarwortels worden verwijderd voor een gezonde vacht.",
        volledigeOmschrijving:
            "Trimmen en plukken is een techniek die specifiek is voor bepaalde rassen die een zogenaamde 'dubbele vacht' of 'plukvacht' hebben, zoals de terriërs of de schnauzers. In tegenstelling tot knippen of scheren, wordt bij het trimmen en plukken de dode haarwortels voorzichtig verwijderd, zodat de vacht op een natuurlijke manier blijft groeien en in topvorm blijft. Deze techniek zorgt ervoor dat de vacht van je huisdier niet in de war raakt, wat kan leiden tot vervilting of huidaandoeningen. Het plukken van de vacht helpt de luchtcirculatie naar de huid, wat bijdraagt aan een gezonde en glanzende vacht. Het is een vak apart, en deze fijne kneepjes heb ik geleerd bij Nancy Van Crean, gespecialiseerd in trimmen. Zodat jouw huisdier altijd de beste zorg krijgt, op maat van je hond.",
    },
    {
        title: "Ontwollen van Honden",
        intro:
            "Het zorgvuldig verwijderen van wol en knopen uit de vacht om de huid gezond te houden en het ruien te versnellen.",
        volledigeOmschrijving:
            "Voor honden met een dichte, wollige vacht kan het ontwollen van de vacht een essentiële stap zijn in de verzorging. Ontwollen is een proces waarbij de knopen en wol in de vacht zorgvuldig worden verwijderd, zonder dat de vacht beschadigd raakt. Door de was- en blaastechniek wordt de huid gezond gehouden en ongemak voor je huisdier voorkomen. Dit proces helpt ook om sneller door de ruiperiode te gaan, wat resulteert in minder haar in huis. Klitten en wol kunnen niet alleen het uiterlijk van je hond beïnvloeden, maar ze kunnen ook de huid verstikken en irritatie veroorzaken. Daarom besteden we veel aandacht aan het zorgvuldig ontwollen van je huisdier, zodat de vacht weer zacht, glanzend en klitvrij is. Dit kan wat tijd kosten, maar we nemen de tijd om ervoor te zorgen dat je hond comfortabel en zonder stress geholpen wordt. Standaard zitten nagels knippen, haren uit de oren plukken en anaalklieren ledigen bij een trimbeurt inbegrepen.",
    },
];

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://static-widget.salonized.com/loader.js';
  script.async = true;
  script.onload = () => {
    console.log('Salonized plugin geladen');
  };
  document.head.appendChild(script);
});



</script>