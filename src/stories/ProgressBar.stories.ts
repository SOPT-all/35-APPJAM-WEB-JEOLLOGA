import ProgressBar from '@components/common/progressBar/ProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ProgressBar',
  component: ProgressBar,
  args: {
    currentStep: 1,
    totalSteps: 4,
    onBackClick: () => alert('clicked'),
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1 },
    },
    totalSteps: {
      control: { type: 'number', min: 1 },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
