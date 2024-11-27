<template>
    <section class="container flex flex-col md:flex-row md:gap-5 lg:gap-10">
        <div class="w-full md:w-3/12 lg:w-4/12">
            <h2 class="text-lg md:text-lg lg:text-xl">Waarom kiezen voor Castor Grooming?</h2>
        </div>
        <div class="w-full lg:w-10/12">
            <div v-for="items in 4"
                class="bg-primary-100 px-8 py-6 rounded relative mb-5 animate-fade-up"
                :class="{'md:-ml-10 md:mr-10': items%2 == 0}"
                >
                <div class="hidden md:block absolute md:-left-6 rounded-full bg-white w-10 h-10 text-center pt-2">
                    <FontAwesomeIcon icon="fa-solid fa-paw"></FontAwesomeIcon>
                </div>
                <h3 class="text-lg mb-3">Ervaren trimster</h3>
                <p>Ik ben gecertificeerd trimster en heb sinds 2016 jaren ervaring
                    in het trimmen van verschillende honden- en kattenrassen. Ik volg geregeld een opleiding om steeds de juiste technieken aan te leren en nieuwe trends op te volgen.
                </p>
            </div>
        </div>
    </section>
</template>


<script setup>


</script> 
