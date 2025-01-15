import ReviewCard from '@components/card/reviewCard/reviewCard/reviewCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Card/ReviewCard',
  component: ReviewCard,
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
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size of the review card.',
    },
  },
  args: {
    reviewTitle: '배영경배영경배영경',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
    size: 'small',
  },
} satisfies Meta<typeof ReviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LargeCard: Story = {
  args: {
    size: 'large',
    reviewTitle: '김가현김가현김가현',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    reviewDescription: '나무아미타불나무아미타불나무아미타불',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
  },
};

export const SmallLongTitle: Story = {
  args: {
    reviewTitle: 'I am 배영경이다I am 배영경이다I am 배영경이다I am 배영경이다',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
    size: 'small',
  },
};

export const LargeLongContentAndTitle: Story = {
  args: {
    reviewTitle:
      'I am 배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다배영경이다',
    reviewDate: '2025.01.15',
    reviewName: 'Bae Young Kyoung Kyoung',
    reviewLink: 'https://san.chosun.com/news/articleView.html?idxno=15686',
    reviewDescription:
      '나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불나무아미타불',
    blogImage: 'https://ifh.cc/g/YwlKhp.jpg',
    size: 'large',
  },
};
