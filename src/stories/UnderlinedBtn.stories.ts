import UnderlinedBtn from '@components/common/button/underlinedBtn/UnderlinedBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/UnderlinedBtn',
  component: UnderlinedBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    onClick: {
      action: 'clicked',
    },
    isActive: {
      control: { type: 'boolean' },
    },
  },
  args: {
    label: 'text',
    onClick: () => alert('click !'),
    isActive: false,
  },
} satisfies Meta<typeof UnderlinedBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
