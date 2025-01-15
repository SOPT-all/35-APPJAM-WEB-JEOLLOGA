import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const recentBtnBox = style({
  display: 'flex',
  width: 'calc(100% - 2rem)',
  gap: '0.8rem',
  marginTop: '0.8rem',

  overflowX: 'auto',
  whiteSpace: 'nowrap',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const emptyResult = style({
  margin: '3.2rem 0 0 10rem',

  color: theme.COLORS.gray7,
  ...theme.FONTS.c2R14,
});
