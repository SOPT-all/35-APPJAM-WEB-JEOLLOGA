import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '30.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6.2rem',
  marginTop: '11.4rem',
});

export const boxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.8rem',
  width: '17.8rem',
});

export const textStyle = style({
  ...theme.FONTS.h3Sb18,
  color: theme.COLORS.gray7,
});

export const imgStyle = style({
  width: '16.1rem',
  height: '12.5rem',
});
