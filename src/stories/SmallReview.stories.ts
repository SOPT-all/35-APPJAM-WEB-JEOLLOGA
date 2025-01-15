import SmallReview from '@components/card/reviewCard/smallReview/SmallReview';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/ReviewCard/SmallReview',
  component: SmallReview,
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
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
} satisfies Meta<typeof SmallReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const example1: Story = {
  args: {
    reviewTitle:
      '나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미',
    reviewDate: '2025.01.15',
    reviewName: '멀봐멀봐멀봐멀봐멀봐멀봐멀봐',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
};
