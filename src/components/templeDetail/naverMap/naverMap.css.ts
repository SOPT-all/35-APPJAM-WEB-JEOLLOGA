import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const addressDetailStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '33.5rem',
  height: '3.4rem',

  ...theme.FONTS.b9R15,
  color: theme.COLORS.gray11,
});

export const addressDetailStyle2 = style({
  width: '33.5rem',
  height: '3.4rem',
});
