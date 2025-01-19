import KakaoBtn from '@components/common/button/kakaoBtn/KakaoBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/KakaoBtn',
  component: KakaoBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KakaoBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
