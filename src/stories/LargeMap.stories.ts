import LargeMap from '@components/templeDetail/naverMap/largeMap/LargeMap';
import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Common/Temple/TempleDetail/LargeMap',
  component: LargeMap,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        pathParams: {
          latitude: '37.55433',
          longitude: '126.9686',
        },
      },
      routing: {
        path: '/map?latitude=37.55433&longitude=126.9686',
      },
    }),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LargeMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
