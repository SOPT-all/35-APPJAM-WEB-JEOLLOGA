import TabBar from '@components/common/tabBar/TabBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
