<template>
    <component
        :is="component"
        :to="to"
        class="px-6 py-2 rounded outline-none focus:ring-2 border-2 border-transparent mr-2 transition-all"
        :class="{ 
            'text-white bg-primary focus:ring-primary-50 origin-center hover:bg-primary-400': !variant || variant === 'primary',
            'bg-primary-100  focus:ring-secondary-50 hover:bg-primary-200': variant === 'secondary',
            'border-gray-800 border-2 text-dark focus:ring-gray-50': variant === 'dark'
        }">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
const props = defineProps<{
     variant?: 'primary' | 'secondary' | 'dark',
     to?: string, 
    }>();

const component = computed(() => {
    if(props.to) return resolveComponent('NuxtLink');
    return "button";
})
</script>