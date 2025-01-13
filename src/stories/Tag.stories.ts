import Tag from '@components/common/Tag/Tag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Curation/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['brown', 'blue', 'gray'],
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    color: 'brown',
    label: 'text',
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
