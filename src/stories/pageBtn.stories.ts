import PageBtn from '@components/common/button/pageBtn/PageBtn';
import type { Meta, StoryObj } from '@storybook/react';

interface PageBtnProps {
  pageIndex: number;
  currentPageNum: number;
}

const meta: Meta<typeof PageBtn> = {
  title: 'Common/Button/PageBtn',
  component: PageBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pageIndex: {
      control: { type: 'number' },
      description: 'The number displayed on the button',
    },
    currentPageNum: {
      control: { type: 'number' },
      description: 'The current active page number',
    },
  },
  args: {
    pageIndex: 1,
    currentPageNum: 1,
  },
};

export default meta;

type Story = StoryObj<PageBtnProps>;

export const Default: Story = {};

export const Page1Active: Story = {
  args: {
    pageIndex: 1,
    currentPageNum: 1,
  },
};

export const Page2Active: Story = {
  args: {
    pageIndex: 2,
    currentPageNum: 2,
  },
};

export const Page3Inactive: Story = {
  args: {
    pageIndex: 3,
    currentPageNum: 1,
  },
};
