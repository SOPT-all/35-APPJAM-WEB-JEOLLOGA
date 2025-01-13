import Icon from '@assets/svgs';
import PageName from '@components/common/PageName/PageName';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/PageName',
  component: PageName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(Icon),
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(Icon),
    },
    title: {
      control: { type: 'text' },
    },
    onLeftClick: { action: 'left button clicked' },
    onRightClick: { action: 'right button clicked' },
  },
  args: {
    leftIcon: 'IcnArrowBlackLeft',
    title: 'GoToJeol',
    rightIcon: 'IcnWish',
  },
} satisfies Meta<typeof PageName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftIcon: 'IcnArrowBlackLeft',
    title: 'GoToJeol',
    rightIcon: 'IcnWish',
    onLeftClick: () => {},
    onRightClick: () => {},
  },
};

export const NoHeart: Story = {
  args: {
    leftIcon: 'IcnArrowBlackLeft',
    onLeftClick: () => {},
    rightIcon: undefined,
    title: 'Left Only',
  },
};
