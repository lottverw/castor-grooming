<template>
    <footer class="bg-primary-50 p-10 mt-6">
        <div class="container mx-auto gap-5 flex flex-col flex-wrap md:flex-row md:justify-center ">
            <div class="md:w-3/12" v-for="contactInfo in data">
                <p class="font-bold">
                    {{ contactInfo.id === 'availability' ? "Openingsuren" : "" }}
                    {{ contactInfo.id === 'contact' ? "Contact" : "" }}
                    {{ contactInfo.id === 'adress' ? "Adres" : "" }}
                </p>


                <ul class="p-0 m-0" v-if="contactInfo.id === 'availability'">
                    <li>{{ contactInfo.monday }}</li>
                    <li>{{ contactInfo.tuesday }}</li>
                    <li>{{ contactInfo.saturday }}</li>
                    <li>{{ contactInfo.other }}</li>
                </ul>

                <template v-if="contactInfo.id === 'contact'">
                    <p><a :href="`tel:${contactInfo.phone}`">{{ contactInfo.phone }}</a></p>
                    <p><a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a></p>
                    <p v-if="contactInfo.id === 'contact'">{{ contactInfo.other }}</p>
                </template>
                <address class="row-span-4" v-if="contactInfo.id === 'adress'">
                    {{ contactInfo.street }} <br />
                    {{ contactInfo.city }} <br />
                    {{ contactInfo.country }}
                </address>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { data } = useContact();
</script>
