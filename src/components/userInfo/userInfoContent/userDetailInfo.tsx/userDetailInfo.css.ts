import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const infoDetailContainer = style({
  display: 'flex',
  padding: '1.6rem 2.4rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  borderRadius: 8,
  backgroundColor: theme.COLORS.gray1,
});

export const infoDetailBox = style({
  display: 'flex',
  width: '6.8rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
});

export const infoDetailTitle = style({
  ...theme.FONTS.c2R14,
});

export const infoDetailData = style({
  ...theme.FONTS.h5Sb16,
});

export const divider = style({
  width: '0.1rem',
  height: '5.3rem',
  backgroundColor: theme.COLORS.gray2,
});
