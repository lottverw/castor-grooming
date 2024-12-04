<template>
    <div class="my-3lg:mb-0"  preset="fadeVisibleOnce" >
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