<template>
    <div class="py-10 md:grid gap-12 grid-cols-4 align-items-center">
        <div class="col-start-2">
            <img class="rounded-md w-full" :src="imageSrc"/>
        </div>
        <div class="">
            <h1 v-if="title" class="text-xl font-bold mb-3">{{ title }}</h1>
            <p class="mb-3">{{ content }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title?: string, 
    content: string,
    imageSrc: string
}>()
</script>