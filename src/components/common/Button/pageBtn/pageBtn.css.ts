import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const currentPageNumStyle = style({
  color: theme.COLORS.white,
  backgroundColor: theme.COLORS.gray10,
  borderRadius: 24,
  width: '2.6rem',
  height: '2.6rem',
  ...theme.FONTS.c2R14,
});

export const pageNumStyle = style({
  color: theme.COLORS.gray10,
  ...theme.FONTS.c2R14,
});
