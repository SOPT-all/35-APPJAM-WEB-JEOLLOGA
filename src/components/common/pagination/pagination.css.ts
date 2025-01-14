import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const paginationContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  height: '3.7rem',
  padding: '0.6rem 0.8rem',
});

export const leftArrowStyle = style({
  width: '3.6rem',
  paddingLeft: '0.4rem',
  paddingRight: '1,6rem',
});

export const rightArrowStyle = style({
  width: '3.6rem',
  paddingLeft: '1.6rem',
  paddingRight: '0.4rem',
});

export const iconStyle = style({
  color: theme.COLORS.gray10,
  transition: 'color 0.2s ease-in-out',
});

export const disabledIcon = style({
  color: theme.COLORS.gray4,
});

export const dotStyle = style({
  width: '2.6rem',
  height: '2.6rem',
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray10,
});
