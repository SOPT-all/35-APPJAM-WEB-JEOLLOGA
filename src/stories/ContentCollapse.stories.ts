import Icon from '@assets/svgs';
import ContentCollapse from '@components/templeDetail/templeInfo/contentCollapse/ContentCollapse';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ContentCollapse',
  component: ContentCollapse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(Icon),
    },
    text: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },

  args: {
    leftIcon: 'IcnArrowGrayDown',
    text: '더보기',
    onClick: () => alert('Clicked!'),
  },
} satisfies Meta<typeof ContentCollapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createContentCollapseStory = (
  leftIcon: keyof typeof Icon,
  text: string,
  onClick: () => void,
) => ({
  args: { leftIcon, text, onClick },
});

export const CustomText: Story = createContentCollapseStory('IcnArrowGrayDown', 'Custom Text', () =>
  alert('Custom Text Clicked!'),
);

export const CustomIcon: Story = createContentCollapseStory('IcnPaste', 'With Custom Icon', () =>
  alert('Custom Icon Clicked!'),
);
