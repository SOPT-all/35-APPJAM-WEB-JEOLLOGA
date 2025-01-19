import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import '../src/styles/fonts.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      reactRouter: {
        routePath: '/',
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
    withRouter,
  ],
};

export default preview;
