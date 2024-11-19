import { setup, type Meta, type StoryObj } from '@storybook/vue3'

import Footer from '../components/Footer.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;

export const Primary: Story = {
  render: (args) => ({
    components: { Footer},
    setup() {
      return { args };
    },
    template: '<Footer v-bind="args" />'
  }),
  args: {
    
  }
}