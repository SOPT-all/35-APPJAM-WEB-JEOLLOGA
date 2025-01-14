import Topbar from '@components/topBottomBar/topBar/TopBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/TopBar',
  component: Topbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Topbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
