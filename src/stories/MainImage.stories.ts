import MainImage from '@components/templeDetail/mainImage/MainImage';
import type { Meta, StoryObj } from '@storybook/react';
const meta = {
  title: 'Carousel/DetailCarousel',
  component: MainImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
