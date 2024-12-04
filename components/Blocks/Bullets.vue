<template>
    <section class="container flex flex-col md:flex-row md:gap-5 lg:gap-10">
        <div class="w-full md:w-3/12 lg:w-4/12">
            <h2 class="text-lg md:text-lg lg:text-xl">{{ title }}</h2>
            <p class="mt-5" v-if="description">{{ description }}</p>
        </div>
        <div class="w-full lg:w-10/12">
            <Motion is="div" preset="fadeVisibleOnce" :delay="index * 100" v-for="bullet, index in bullets"

                class="bg-primary-100 px-8 py-6 rounded relative mb-5"
                :class="{'md:-ml-10 md:mr-10': index%2 == 0}"
                >
                <div class="hidden md:block absolute md:-left-6 rounded-full bg-white w-10 h-10 text-center pt-2">
                    <FontAwesomeIcon icon="fa-solid fa-paw"></FontAwesomeIcon>
                </div>
                <h3 class="text-lg mb-3">{{ bullet.title }}</h3>
                <p>
                    {{ bullet.description }}
                </p>
            </Motion>
        </div>
    </section>
</template>


<script setup lang="ts">
interface Bullet {
    title: string, 
    description: string
}
defineProps<{ bullets: Bullet[], title: string, description?: string }>()
</script> 
