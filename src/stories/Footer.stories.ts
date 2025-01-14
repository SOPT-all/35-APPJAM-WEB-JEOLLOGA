import Footer from '@components/topBottomBar/footer/Footer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
