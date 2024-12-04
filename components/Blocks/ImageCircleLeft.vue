<template>
    <div class="container pt-8">
        <Motion is="div" preset="fadeVisibleOnce"  class="justify-items-center items-center flex flex-col md:flex-row md:gap-10 lg:gap-3" >
            <div class="w-10/12 mx-auto my-3md:mb-0 md:w-5/12 z-0 ">
                <img class="rounded-full md:max-w-full lg:max-w-lg mx-auto" v-if="isReady" :src="image" />
            </div>
            <div class="w-10/12 mx-auto md:w-7/12 z-10">
                <div class="lg:py-24">
                    <h1 v-if="title" class="text-xl my-3text-primary-600">{{ title }}</h1>
                    <p class="mb-4">{{ content }}</p>
                    <slot></slot>
                </div>
            </div>
        </Motion>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title?: string,
    content: string,
    imageSrc: string
}>()

let isReady = ref(false)

const image = computed(() => {
    return new URL(`/assets/images/${props.imageSrc}`, import.meta.url).href;
});

setTimeout(() => {
    isReady.value = true
}, 800)


</script>