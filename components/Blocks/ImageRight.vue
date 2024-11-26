<template>
    <div class="container mx-auto pt-24">
        <div class="justify-items-center items-center  flex ">

            <div class="w-6/12 z-10">
                <div class="pr-36 pl-24 py-24 -mr-34  ">
                    <h1 v-if="title" class="text-xl font-bold mb-3">{{ title }}</h1>
                    <p class="mb-3">{{ content }}</p>
                    <slot></slot>
                </div>
            </div>
            <div class="w-5/12 z-0">
                <img class="rounded-full" v-if="isReady" :src="image" />
            </div>

        </div>
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
}, 300)


</script>