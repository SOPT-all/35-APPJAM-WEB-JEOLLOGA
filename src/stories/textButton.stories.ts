import Icon from '@assets/svgs';
import TextButton from '@components/common/button/textButton/TextButton';
import type { Meta, StoryObj } from '@storybook/react';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'lightGray' | 'gray';
  clicked: boolean;
  size: 'small' | 'medium';
  leftIcon?: keyof typeof Icon;
  rightIcon?: keyof typeof Icon;
  text: string;
}

const meta = {
  title: 'Common/TextButton',
  component: TextButton,
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
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createTextButtonStory = (
  theme: TextButtonProps['theme'],
  clicked: boolean,
  size: TextButtonProps['size'],
  text: string,
  leftIcon?: keyof typeof Icon,
  rightIcon?: keyof typeof Icon,
) => ({
  args: { theme, clicked, size, text, leftIcon, rightIcon },
});

export const LightGray: Story = createTextButtonStory(
  'lightGray',
  false,
  'small',
  'LightGray',
  undefined,
  'IcnPaste',
);

export const LightGray2: Story = createTextButtonStory(
  'lightGray',
  true,
  'small',
  'LightGray2',
  'IcnPaste',
  'IcnPaste',
);

export const Gray: Story = createTextButtonStory(
  'gray',
  true,
  'medium',
  'Gray',
  'IcnSmallHeart',
  'IcnSmallHeart',
);
