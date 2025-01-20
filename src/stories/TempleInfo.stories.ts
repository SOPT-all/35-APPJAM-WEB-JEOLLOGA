import TempleInfo from '@components/templeDetail/templeInfo/templeInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Temple/TempleDetail/TempleInfo',
  component: TempleInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TempleInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
