import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const accountActionBoxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.8rem',
  width: '33.5rem',
});

export const accountActionButtonStyle = style({
  width: '4.6rem',
  height: '3.3rem',
  ...theme.FONTS.c6R13,
  color: theme.COLORS.gray5,
});

export const smallDivider = style({
  width: '0.1rem',
  height: '1.4rem',
  backgroundColor: theme.COLORS.gray5,
});
