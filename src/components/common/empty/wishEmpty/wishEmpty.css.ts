import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '30.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '6.2rem',
});

export const boxStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.8rem',
});

export const textStyle = style({
  ...theme.FONTS.h3Sb18,
  color: theme.COLORS.gray7,
});
