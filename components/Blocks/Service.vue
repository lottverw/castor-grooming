<template>
    <div class="mb-3 lg:mb-0">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <p>{{ content  }}</p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string, 
    content: string,
    imageSrc?: string
}>()
</script>