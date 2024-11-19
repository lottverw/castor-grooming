<template>
    <div class="grid grid-cols-1">
        <img :src="imageSrc" class="w-18 h-18 rounded-full mb-3" />        <h2>{{ title }}</h2>
        <p>{{ content  }}</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string, 
    content: string,
    imageSrc: string
}>()
</script>