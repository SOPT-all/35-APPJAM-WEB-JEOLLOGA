import SmallMap from '@components/templeDetail/naverMap/smallMap/SmallMap';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Map/SmallMap',
  component: SmallMap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SmallMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
