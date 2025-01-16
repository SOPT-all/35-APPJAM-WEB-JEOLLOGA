import NaverMap from '@components/templeDetail/naverMap/NaverMap';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Temple/TempleDetail/Map',
  component: NaverMap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NaverMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
