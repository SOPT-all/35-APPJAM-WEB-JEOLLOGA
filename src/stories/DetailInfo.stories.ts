import DetailInfo from '@components/common/detailInfo/DetailInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/DetailInfo',
  component: DetailInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    title: 'title',
    content: 'body',
  },
} satisfies Meta<typeof DetailInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
