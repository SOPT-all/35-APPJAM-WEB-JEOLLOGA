import PageBottomBtn from '@components/common/button/pageBottom/PageBottomBtn';
import type { Meta, StoryObj } from '@storybook/react';

interface PageBottomBtnProps {
  btnText: string;
  size: 'small' | 'large';
  isDisabled: boolean;
  onClick: () => void;
}

const meta: Meta<typeof PageBottomBtn> = {
  title: 'Common/Button/PageBottomBtn',
  component: PageBottomBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    btnText: {
      control: { type: 'text' },
      description: 'The text displayed on the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'The size of the button',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Indicates whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'The function triggered when the button is clicked',
    },
  },
  args: {
    btnText: 'Click Me',
    size: 'large',
    isDisabled: false,
  },
};

export default meta;

type Story = StoryObj<PageBottomBtnProps>;

export const Default: Story = {};

export const LargeEnabled: Story = {
  args: {
    btnText: '절로가 시작하기',
    size: 'large',
    isDisabled: false,
  },
};

export const SmallEnabled: Story = {
  args: {
    btnText: '예약하기',
    size: 'small',
    isDisabled: false,
  },
};

export const LargeDisabled: Story = {
  args: {
    btnText: '다음',
    size: 'large',
    isDisabled: true,
  },
};

export const SmallDisabled: Story = {
  args: {
    btnText: '예약하기',
    size: 'small',
    isDisabled: true,
  },
};
