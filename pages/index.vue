<template>
    <Heading></Heading>
    <BlocksImageLeft 
            imageSrc="https://images.pexels.com/photos/19145898/pexels-photo-19145898/free-photo-of-groomer-cutting-dogs-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        :content="introText">
        <Button >Boek een afspraak</Button>
        <Button  variant="secondary" to="/het-salon">Ontdek het salon</Button>
    </BlocksImageLeft>
    <BlocksBanner class="grid grid-cols-6">
        <BlocksService title="Ontwollen" content="Een ontwolbehandeling helpt bij het verwijderen van overtollige ondervacht. Dit vermindert losse haren in huis en houdt de vacht gezond en luchtig. Ideaal voor honden met een dubbele vacht!" imageSrc="https://images.pexels.com/photos/6131576/pexels-photo-6131576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></BlocksService>
        <BlocksService title="Katten trimmen" content="Katvriendelijk trimmen zonder stress. Denk aan het verwijderen van klitten, het verzorgen van een vervilte vacht of een volledige scheerbeurt. Perfect voor een glanzende, gezonde vacht." imageSrc="https://images.pexels.com/photos/29437597/pexels-photo-29437597/free-photo-of-close-up-of-a-calico-cat-in-the-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600"></BlocksService>
        <BlocksService title="Honden trimmen" content="Professioneel trimmen op maat voor elke hond. Van knippen tot scheren of plukken, afhankelijk van het ras en de vacht. Jouw hond loopt er weer piekfijn bij!" imageSrc="https://images.pexels.com/photos/19145893/pexels-photo-19145893/free-photo-of-dog-groomer-at-work.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></BlocksService>
    </BlocksBanner>


</template>

<script setup lang="ts">
definePageMeta({
    "title": "Castor Grooming | Home"
})
const introText = "Mijn naam is Nele Van de Wouwer, en ik ben de trotse eigenaar van Castor Grooming, een trimsalon voor honden en katten. Sinds 2016 heb ik ervaring en een passie voor dierenverzorging. Het is mijn missie om jouw huisdier met de grootste zorg en liefde te behandelen, zodat ze altijd weer stralend en gelukkig de salon verlaten.";

</script>