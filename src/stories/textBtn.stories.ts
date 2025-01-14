import Icon from '@assets/svgs';
import TextBtn from '@components/common/button/textBtn/TextBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/TextBtn',
  component: TextBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    clicked: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    text: {
      control: { type: 'text' },
    },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(Icon),
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(Icon),
    },
    onClick: { action: 'clicked' },
  },

  args: {
    clicked: false,
    size: 'small',
    text: 'TextButton',
    leftIcon: undefined,
    rightIcon: 'IcnPaste',
    onClick: () => alert('click !'),
  },
} satisfies Meta<typeof TextBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createTextBtnStory = (
  text: string,
  clicked?: boolean,
  size?: 'small' | 'medium',
  leftIcon?: keyof typeof Icon,
  rightIcon?: keyof typeof Icon,
) => ({
  args: { clicked, size, text, leftIcon, rightIcon },
});

export const GoToJeol: Story = createTextBtnStory(
  'GoToJeol',
  undefined,
  undefined,
  undefined,
  'IcnPaste',
);

export const Clicked: Story = createTextBtnStory(
  'Clicked',
  true,
  undefined,
  'IcnPaste',
  'IcnPaste',
);
