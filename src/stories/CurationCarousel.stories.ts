import CurationCarousel from '@components/carousel/curationCarousel/CurationCarousel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Carousel/CurationCarousel',
  component: CurationCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurationCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
