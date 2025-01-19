import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const topInfoStyle = style({
  display: 'flex',
  width: '33.5rem',
  padding: '1.8rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.4rem',

  borderRadius: 8,
  backgroundColor: theme.COLORS.gray1,
});

export const userNameStyle = style({
  display: 'flex',
  gap: '0.2rem',
  ...theme.FONTS.h2Sb20,
});

export const userEmailStyle = style({
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray8,
});
