import MapCard from '@components/card/mapCard/MapCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/MapCard',
  component: MapCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     onClick: {
  //       action: 'clicked',
  //     },
  //   },
  //   args: {
  //     onClick: () => alert('click !'),
  //   },
} satisfies Meta<typeof MapCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
