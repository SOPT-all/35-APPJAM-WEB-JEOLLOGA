import LargeReview from '@components/reviewComponent/largeReview/LargeReview';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ReviewComponent/LargeReview',
  component: LargeReview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    reviewTitle: {
      control: 'text',
      description: 'Title of the review.',
    },
    reviewDate: {
      control: 'text',
      description: 'Date of the review.',
    },
    reviewName: {
      control: 'text',
      description: 'Name of the reviewer.',
    },
    reviewLink: {
      control: 'text',
      description: 'Link to the full review.',
    },
    reviewDescription: {
      control: 'text',
      description: 'Content of the full review.',
    },
    blogImage: {
      control: 'text',
      description: 'URL of the review thumbnail image.',
    },
  },
  args: {
    reviewTitle: 'I am 배영경이다',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    reviewDescription: '아아아아아아',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
} satisfies Meta<typeof LargeReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const longContent: Story = {
  args: {
    reviewTitle: 'I am 배영경이다',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    reviewDescription:
      '나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
};

export const longTitle: Story = {
  args: {
    reviewTitle:
      'I am 배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    reviewDescription: '나무아미타불나무아미타불나무아미타불',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
};

export const longContentTitle: Story = {
  args: {
    reviewTitle:
      'I am 배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    reviewDescription:
      '나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
};
