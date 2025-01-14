import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const infoBox = style({
  display: 'flex',
  flexDirection: 'column',

  width: '16.3rem',
  height: '9.7rem',
});

export const hashTag = style({
  width: '100%',
  height: '1.7rem',

  color: theme.COLORS.gray5,
  ...theme.FONTS.c5M13,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const title = style({
  width: '100%',
  height: '4.9rem',

  color: theme.COLORS.black,
  ...theme.FONTS.h5Sb16,
  alignContent: 'center',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const tagBox = style({
  display: 'flex',
  gap: '0.6rem',

  width: '100%',
  height: '2.1rem',
  marginTop: '0.8rem',
});
