import Icon from '@assets/svgs';
import OnboardingBtn from '@components/common/button/onboardingBtn/OnboardingBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/OnboardingButton',
  component: OnboardingBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    btnText: {
      control: { type: 'text' },
      description: 'Text displayed on the button',
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Determines if the button is active',
    },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(Icon),
      description: 'Icon displayed on the left side of the button',
    },
  },
  args: {
    btnText: '이슬람교',
    isActive: false,
    leftIcon: undefined,
  },
} satisfies Meta<typeof OnboardingBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    btnText: '60대 이상',
    isActive: true,
  },
};

export const WithIcon: Story = {
  args: {
    btnText: '있음',
    leftIcon: 'IcnO',
  },
};

export const WithIconActive: Story = {
  args: {
    btnText: '없음',
    leftIcon: 'IcnX',
    isActive: true,
  },
};
