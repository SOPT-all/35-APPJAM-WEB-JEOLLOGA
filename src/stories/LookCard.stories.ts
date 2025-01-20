import LookCard from '@components/card/lookCard/LookCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/LookCard',
  component: LookCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
  },
  args: {
    name: '절로가',
  },
} satisfies Meta<typeof LookCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
