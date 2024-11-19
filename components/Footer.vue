<template>
    <footer class="flex-col flex-wrap md:flex-row bg-primary-50 p-10 flex gap-5 md:justify-center mt-6">
        <div class=" md:w-3/12">
            <p><strong>Beschikbaarheid Castor grooming</strong></p>
            <ul class="p-0 m-0">
                <li v-for="(item, index) in availability.hours" :key="index">{{ item }}</li>
            </ul>
        </div>
        <div class="md:w-3/12">
            <p class="font-bold">Contact</p>
            <p><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></p>
            <p><a :href="`mailto:${contact.mail}`">{{ contact.mail }}</a></p>
            <p>{{ contact.other }}</p>
        </div>
        <div class="md:w-3/12">
            <p class="font-bold">Adres</p>
            <address class="row-span-4">
                {{ contact.street }} <br/>
                {{ contact.postal }} <br/>
                België
            </address>
        </div>
    </footer>
</template>

<script setup>
const contact = {
    phone: "0499.60.30.83",
    street: "Pulse pad 8,",
    postal: "2280 Grobbendonk",
    mail: "info@castorgrooming.eu",
    other: "U kan me ook altijd bereiken via Whatssap of Instagram."
}

const availability = {
    info: 'Als je twijfelt of je graag een afspraak wilt maken, neem dan gerust contact met me op, en ik zal samen met je kijken naar de best mogelijke tijden die voor jou en je huisdier werken.',
    hours: [
        "Maandag : 9u – 21u", "Dinsdag: 15u – 21u", "1 ste dinsdag van de maand 9u- 21u", "Zaterdag: 15u- 18u"
    ]
}
</script>