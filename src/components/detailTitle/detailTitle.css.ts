import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const titleContainerStyle = style({
  width: '33.5rem',
  height: '3.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid black',
});

export const titleStyle = style({
  ...theme.FONTS.h2Sb20,
});

export const buttonStyle = style({
  ...theme.FONTS.c6R13,
  color: theme.COLORS.gray8,
});
