import LargeMap from '@components/templeDetail/naverMap/largeMap/LargeMap';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Temple/TempleDetail/LargeMap',
  component: LargeMap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LargeMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
