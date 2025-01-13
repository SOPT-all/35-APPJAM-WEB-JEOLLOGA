import type { Preview } from '@storybook/react';
import '../src/styles/fonts.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>
          {`
            html, body {
              font-size: 62.5%;
            }
          `}
        </style>
        <Story />
      </>
    ),
  ],
};

export default preview;
