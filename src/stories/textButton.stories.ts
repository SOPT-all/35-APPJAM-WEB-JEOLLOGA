// textButton.stories.tsx
import Icon from '@assets/svgs';
import TextButton from '@components/common/TextButton/TextButton';
import type { Meta, StoryObj } from '@storybook/react';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'lightGray' | 'gray';
  state: 'default' | 'pressed';
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
    state: {
      control: { type: 'radio' },
      options: ['default', 'pressed'],
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
    state: 'default',
    size: 'medium',
    text: 'Sample TextButton',
    leftIcon: undefined,
    rightIcon: undefined,
  },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createTextButtonStory = (
  theme: TextButtonProps['theme'],
  state: TextButtonProps['state'],
  size: TextButtonProps['size'],
  text: string,
  leftIcon?: keyof typeof Icon,
  rightIcon?: keyof typeof Icon,
) => ({
  args: { theme, state, size, text, leftIcon, rightIcon },
});

export const LightGrayDefaultSmall: Story = createTextButtonStory(
  'lightGray',
  'default',
  'small',
  'LightGray Default Small',
);

export const GrayPressedMedium: Story = createTextButtonStory(
  'gray',
  'pressed',
  'medium',
  'Gray Pressed Medium',
  'IcnSmallHeart',
  'IcnSmallHeart',
);
