<template>
    <img :src="imageSrc" class="w-10 h-10 rounded-full mb-3" />
    <h2>{{ title }}</h2>
    <p>{{ content  }}</p>
</template>

<script setup lang="ts">

defineProps<{
    title: string, 
    content: string,
    imageSrc: string
}>()
</script>