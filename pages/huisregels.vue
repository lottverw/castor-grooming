<template>
    <Heading></Heading>
    <div class="container my-10">
        <h1 class="text-xl">Huisregels en afspraken</h1>
        <p class="mb-3">
            Deze zijn er om ervoor te zorgen dat jouw bezoek aan Castor Grooming zo soepel en
            prettig mogelijk verloopt. Om dat te bereiken, zijn er een aantal huisregels en
            voorwaarden opgesteld voor het maken van afspraken. Door een afspraak te maken,
            ga je akkoord met de onderstaande voorwaarden.
        </p>

        <AccordeonContainer :panels="content"></AccordeonContainer>
    </div>


</template>

<script setup>
const content = [

    {
        title: "Afspraak maken",
        content: "Je kunt eenvoudig een afspraak maken via ons online boekingssysteem op de website. Mocht je hulp nodig hebben, neem dan gerust contact met ons op. Telefonisch of via E-mail: Wil je liever telefonisch of per e-mail een afspraak maken? Dit is natuurlijk ook mogelijk. Zorg ervoor dat je de benodigde gegevens doorgeeft, zoals het ras, de grootte en de vachtomstandigheden van je huisdier, zodat we de juiste tijd kunnen inplannen."
    },
    {
        title: "Annuleringen en Wijzigingen",
        content: "Mocht je een gemaakte afspraak willen annuleren, verzoeken we je dit minimaal 24 uur van tevoren te doen. Zo kunnen we andere klanten ook helpen die mogelijk op de wachtlijst staan. Te laat annuleren: Als je een afspraak later dan 24 uur voor de geplande tijd annuleert of niet op komt dagen, behouden we ons het recht voor om een annuleringstarief in rekening te brengen. Tijdige Wijzigingen: Als je een afspraak wilt verplaatsen, doe dit dan bij voorkeur minimaal 24 uur van tevoren. Dit zorgt ervoor dat we voldoende ruimte hebben om je in te plannen."
    },
    {
        title: "Vertragingen",
        content: "We vragen je om altijd op tijd te komen voor je afspraak. Bij te late aankomst kan het zijn dat de geplande tijd niet meer haalbaar is en we genoodzaakt zijn om de afspraak te verkorten of opnieuw in te plannen. Gelieven een seintje te geven bij vertraging. Wachtlijst: In drukke periodes kan het zijn dat er wat wachttijd is voor je afspraak. Ik doe mijn best om je zo snel mogelijk te helpen, maar ik vraag om wat begrip mocht er een kleine vertraging optreden."
    },
    {
        title: "Gezondheid van je Huisdier",
        content: "Als je huisdier gezondheidsproblemen heeft (zoals een huidinfectie, allergieën of andere aandoeningen), laat dit dan van tevoren weten. In sommige gevallen kan het nodig zijn om een dierenarts te raadplegen voor we de trimbehandeling uitvoeren. We vragen je om geen zieke of gewonde dieren naar de salon te brengen. Als je huisdier symptomen vertoont zoals hoesten, nies, diarree, of andere tekenen van ziekte, neem even contact op dan kan er beslist worden om de afspraak eventueel te verplaatsen totdat je huisdier volledig hersteld is. Dit voorkomt het risico op het overdragen van ziektes naar andere dieren in de salon."
    },
    {
        title: "Leeftijd van je Huisdier",
        content: "Voor oudere of zieke dieren kunnen we aangepaste trimsessies aanbieden die minder belastend zijn. Geef dit altijd vooraf aan zodat we een veilige en comfortabele behandeling kunnen bieden. Vaccinaties: We verzoeken je vriendelijk om ervoor te zorgen dat je huisdier up-to-date is met zijn of haar vaccinaties, in het bijzonder de vaccinatie tegen hondenziekte (voor honden) en kattenziekte (voor katten). Dit helpt om de verspreiding van ziekten binnen de trimsalon te voorkomen en zorgt voor de veiligheid van alle dieren die de salon bezoeken. "
    },
    {
        title: "Betaling",
        content: "Betaling dient altijd direct na de behandeling te worden voldaan. We accepteren contant geld, Paypal of directe overschrijving via de gsm in aanwezigheid in het salon."
    },
    {
        title: "Prijzen",
        content: "De prijs van de trimbehandeling wordt bepaald door een uurprijs. Bij het maken van de afspraak wordt er een indicatie van de prijs meegeven. Deze is niet altijd exact te bepalen, aangezien dit afhankelijk is van vele factoren (bijvoorbeeld veel of weinig knopen). Eventuele extra kosten (bijvoorbeeld voor extra tijd of speciale zorg) worden in overleg met jou besproken."
    },
    {
        title: "Huisdieren in de Salon",
        content: "We vragen je om je huisdier in de salon altijd aangelijnd of in een kattenmand te houden voor de veiligheid van zowel je huisdier als andere dieren."
    },
    {
        title: "Bezoek aan het Salon",
        content: "Als eigenaar van je hond of kat mag je gerust in het salon aanwezig zijn. Dit wordt individueel per dier bekeken, sommige hebben hier baat bij anderen dan weer niet."
    }, {
        title: "Gedrag van je Huisdier",
        content: "We behandelen elk huisdier met zorg en respect. Als je huisdier extreem angstig of agressief is, kan het zijn dat we de afspraak moeten aanpassen. Dit kan bijvoorbeeld zijn dat we geen volledige trimbeurt doen (zoals niet wassen) tot dat er genoeg vertrouwen is."
    },
];


</script>