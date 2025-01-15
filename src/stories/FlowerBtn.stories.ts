import FlowerBtn from '@components/common/button/flowerBtn/FlowerBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/FlowerBtn',
  component: FlowerBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    isRightIcn: {
      control: { type: 'boolean' },
    },
    isLeftIcn: {
      control: { type: 'boolean' },
    },
    isActive: {
      control: { type: 'boolean' },
    },
  },
  args: {
    label: '찜하기',
    isRightIcn: true,
    isLeftIcn: true,
    isActive: false,
    onClick: () => {},
  },
} satisfies Meta<typeof FlowerBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
