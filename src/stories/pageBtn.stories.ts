import PageBtn from '@components/common/button/pageBtn/pageBtn';
import type { Meta, StoryObj } from '@storybook/react';

interface PageBtnProps {
  pageNum: number;
  currentPageNum: number;
}

const meta: Meta<typeof PageBtn> = {
  title: 'Common/PageBtn', // 스토리북에서 표시될 경로
  component: PageBtn,
  parameters: {
    layout: 'centered', // 컴포넌트를 가운데 정렬
  },
  argTypes: {
    pageNum: {
      control: { type: 'number' },
      description: 'The number displayed on the button',
    },
    currentPageNum: {
      control: { type: 'number' },
      description: 'The current active page number',
    },
  },
  args: {
    pageNum: 1,
    currentPageNum: 1,
  },
};

export default meta;

type Story = StoryObj<PageBtnProps>;

export const Default: Story = {};

export const Page1Active: Story = {
  args: {
    pageNum: 1,
    currentPageNum: 1,
  },
};

export const Page2Active: Story = {
  args: {
    pageNum: 2,
    currentPageNum: 2,
  },
};

export const Page3Inactive: Story = {
  args: {
    pageNum: 3,
    currentPageNum: 1,
  },
};
