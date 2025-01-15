import InfoBtn from '@components/common/button/infoBtn/InfoBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/InfoBtn',
  component: InfoBtn,
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
    hasDivider: {
      action: 'boolean',
    },
  },
  args: {
    label: '공지사항',
    onClick: () => alert('click !'),
    hasDivider: true,
  },
} satisfies Meta<typeof InfoBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
