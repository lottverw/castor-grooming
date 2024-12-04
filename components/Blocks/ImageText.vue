<template>
      <Motion is="div" preset="fadeVisibleOnce" class="mb-10 md:mb-0 rounded ">
        <div class="overflow-hidden h-64 rounded-t">
            <img class="" v-if="isReady" :src="image" />
        </div>
        <div class="bg-white h-46 rounded p-10 z-10">
            <h3 v-if="title" class="text-lg mb-3">{{ title }}</h3>
            <p class="mb-7">{{ text }}</p>
            <slot></slot>
        </div>
    </Motion>
</template>

<script setup lang="ts">

const props = defineProps<{
    title?: string,
    text: string,
    imageSrc: string,
    position: "left" | "right"
}>()

let isReady = ref(false)

const image = computed(() => {
    return new URL(`/assets/images/${props.imageSrc}`, import.meta.url).href;
});

setTimeout(() => {
    isReady.value = true
}, 300)


</script>