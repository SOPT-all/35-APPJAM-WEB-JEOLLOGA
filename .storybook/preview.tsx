import type { Preview } from '@storybook/react';
import React from 'react';

// import theme from '../src/styles/theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default preview;
