<template>
    <div class="border border-primary-100"  @click="handleClick()" :aria-expanded="active" :aria-controls="index">
        <h3 class="text-lg p-3 flex justify-between items-center" 
        :class="{'bg-primary-100': active}"
        :id="index">
        <span>{{ title }}</span>
        <font-awesome-icon  v-if="!active" class="block" :icon="['fas', 'chevron-down']" size="sm" />
        <font-awesome-icon  v-if="active" class="block" :icon="['fas', 'chevron-up']" size="sm" />    </h3>
        <Motion is="p" 
        preset='fade' 
        v-if="active"
        class="p-3 border-primary-100"
        >{{ content }}</Motion>
    </div>
  
</template>

<script lang="ts" setup>


interface Panel {
    title: string, 
    content: string,
    active: boolean,
    index: string
}

const props = defineProps<Panel>();

const emit = defineEmits<{
    "toggle": [value: string]
}>()
const handleClick = () => {
    console.log('Clickl ontvangen:', props.index);
    emit('toggle', props.index)
}
</script>