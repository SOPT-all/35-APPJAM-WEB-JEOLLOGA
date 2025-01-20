import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '33.1rem',
  height: '4rem',
});

export const iconBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',

  width: '12rem',
  height: '4rem',
});

export const iconStyle = style({
  cursor: 'pointer',
});
