import PageBottomBtn from '@components/common/Button/pageBottom/pageBottomBtn';
import type { Meta, StoryObj } from '@storybook/react';

interface PageBottomBtnProps {
  btnText: string;
  size: 'small' | 'large';
  disabled: boolean;
  onClick: () => void;
}

const meta: Meta<typeof PageBottomBtn> = {
  title: 'Common/PageBottomBtn', // 스토리북에서 표시될 경로
  component: PageBottomBtn,
  parameters: {
    layout: 'centered', // 컴포넌트를 가운데 정렬
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
    disabled: {
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
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<PageBottomBtnProps>;

export const Default: Story = {};

export const LargeEnabled: Story = {
  args: {
    btnText: '절로가 시작하기',
    size: 'large',
    disabled: false,
  },
};

export const SmallEnabled: Story = {
  args: {
    btnText: '예약하기',
    size: 'small',
    disabled: false,
  },
};

export const LargeDisabled: Story = {
  args: {
    btnText: '다음',
    size: 'large',
    disabled: true,
  },
};

export const SmallDisabled: Story = {
  args: {
    btnText: '예약하기',
    size: 'small',
    disabled: true,
  },
};
