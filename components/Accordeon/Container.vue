<template>
    <div>
        <AccordeonPanel v-for="panel, index in panels" 
            :title="panel.title" 
            :content="panel.content" 
            :active="state.active === `${index}index`"
            :key="`apnl-${index}`"
            :index="index + 'index'"
            @toggle="toggleAccordionPanel"
            >
        </AccordeonPanel>
    </div>
</template>


<script setup lang="ts">
interface Panel {
    title: string,
    content: string
}

defineProps<{ panels: Panel[] }>();

const state = reactive<{active: null|string}>({ active: null })

const toggleAccordionPanel = (value: string) => {
    console.log('Ontvangen+ gelikt', value)
    state.active = value;
}
</script>