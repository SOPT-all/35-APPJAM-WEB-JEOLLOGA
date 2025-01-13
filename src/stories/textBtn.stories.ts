import Icon from '@assets/svgs';
import TextBtn from '@components/common/button/textBtn/TextBtn';
import type { Meta, StoryObj } from '@storybook/react';

interface TextBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'lightGray' | 'gray';
  clicked: boolean;
  size: 'small' | 'medium';
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  text: string;
}

const meta = {
  title: 'Common/TextBtn',
  component: TextBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['lightGray', 'gray'],
    },
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
  },

  args: {
    theme: 'lightGray',
    clicked: false,
    size: 'small',
    text: 'TextButton',
    leftIcon: undefined,
    rightIcon: 'IcnPaste',
  },
} satisfies Meta<typeof TextBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createTextBtnStory = (
  theme: TextBtnProps['theme'],
  clicked: boolean,
  size: TextBtnProps['size'],
  text: string,
  leftIcon?: keyof typeof Icon,
  rightIcon?: keyof typeof Icon,
) => ({
  args: { theme, clicked, size, text, leftIcon, rightIcon },
});

export const LightGray: Story = createTextBtnStory(
  'lightGray',
  false,
  'small',
  'LightGray',
  undefined,
  'IcnPaste',
);

export const LightGray2: Story = createTextBtnStory(
  'lightGray',
  true,
  'small',
  'LightGray2',
  'IcnPaste',
  'IcnPaste',
);

export const Gray: Story = createTextBtnStory(
  'gray',
  true,
  'medium',
  'Gray',
  'IcnSmallHeart',
  'IcnSmallHeart',
);
