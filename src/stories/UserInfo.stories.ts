import UserInfo from '@components/myPage/userInfo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Mypage/UserInfo',
  component: UserInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
