<template>
    <component
        :is="component"
        :to="to"
        class="px-6 py-2 rounded-full outline-none focus:ring-2 mr-2"
        :class="{ 
            'text-white bg-primary focus:ring-primary-50 hover:bg-orange': !variant || variant === 'primary',
            'bg-primary-50 text-primary focus:ring-secondary-50 hover:bg-primary': variant === 'secondary'
        }">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
const props = defineProps<{
     variant?: 'primary' | 'secondary',
     to?: string, 
    }>();

const component = computed(() => {
    if(props.to) return resolveComponent('NuxtLink');
    return "button";
})
</script>