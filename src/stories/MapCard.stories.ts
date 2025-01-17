import MapCard from '@components/card/mapCard/MapCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/MapCard',
  component: MapCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MapCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
