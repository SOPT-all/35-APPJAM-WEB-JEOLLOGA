import TapBar from '@components/common/tapBar/TapBar';
import { TAPS } from '@constants/taps';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/TabBar',
  component: TapBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: Object.keys(TAPS),
    },
  },
} satisfies Meta<typeof TapBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterTab: Story = {
  args: {
    type: 'filter',
  },
};

export const DetailTab: Story = {
  args: {
    type: 'detail',
  },
};
