import Pagination from '@components/common/pagination/Pagination';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      description: 'Currently active page',
    },
    totalPages: {
      control: { type: 'number' },
      description: 'Total number of pages',
    },
    onPageChange: { action: 'Page changed' },
  },
  args: {
    currentPage: 8,
    totalPages: 10,
    onPageChange: () => alert('click !'),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TotalOne: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const TotalThree: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
  },
};

export const TotalSeven: Story = {
  args: {
    currentPage: 5,
    totalPages: 7,
  },
};

export const TotalEight: Story = {
  args: {
    currentPage: 4,
    totalPages: 8,
  },
};

export const AtLastPage: Story = {
  args: {
    currentPage: 12,
    totalPages: 12,
  },
};
