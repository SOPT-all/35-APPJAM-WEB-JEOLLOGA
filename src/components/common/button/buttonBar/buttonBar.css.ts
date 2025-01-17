import { style } from '@vanilla-extract/css';

const buttonBarContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '37.5rem',
  height: '7.2rem',
  padding: '1rem 2rem',
  boxSizing: 'border-box',
  marginLeft: '-2rem',

  boxShadow: `0px -4px 16px 0px rgba(0, 0, 0, 0.05)`,
});

export default buttonBarContainer;
