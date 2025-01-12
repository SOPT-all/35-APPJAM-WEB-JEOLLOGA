import Button from '@components/common/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'xLarge' | 'large' | 'medium';
  isDisabled?: boolean;
  label: string;
}

const meta = {
  title: 'Common/Button', // 스토리북에서 컴포넌트가 표시되는 경로 (실제 컴포넌트랑 이름 같게 하기)
  component: Button, // 스토리를 만들 컴포넌트 이름
  parameters: {
    layout: 'centered', // 스토리를 가운데 정렬하여 표시
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'outline'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xLarge', 'large', 'medium'],
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    isDisabled: false,
    label: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createButtonStory = (variant: ButtonProps['variant'], label: string) => ({
  args: {
    variant,
    label,
  },
  argsType: {
    variant: {
      control: false,
    },
  },
});

export const Primary: Story = createButtonStory('primary', 'Primary Button');

export const Secondary: Story = createButtonStory('secondary', 'Secondary Button');

export const Tertiary: Story = createButtonStory('tertiary', 'Tertiary Button');

export const Outline: Story = createButtonStory('outline', 'Outline Button');
