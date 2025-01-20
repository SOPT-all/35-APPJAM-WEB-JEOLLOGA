import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
});

export const headerContainer = style({
  boxShadow: theme.COLORS.filerDropshadow,
});

export const scrollContainer = style({
  display: 'flex',
  gap: '0.8rem',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
});
