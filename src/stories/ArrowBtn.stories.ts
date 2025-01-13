import ArrowBtn from '@components/common/ArrowBtn/ArrowBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/ArrowBtn',
  component: ArrowBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    onClick: () => alert('click !'),
  },
} satisfies Meta<typeof ArrowBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
