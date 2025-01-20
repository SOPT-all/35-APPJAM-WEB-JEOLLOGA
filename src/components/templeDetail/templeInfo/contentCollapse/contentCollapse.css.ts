import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contentCollapseContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '33.5rem',
  height: '4.5rem',
});

export const collapseButtonBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.3rem',
  ...theme.FONTS.b8M15,
  color: theme.COLORS.gray7,
});
