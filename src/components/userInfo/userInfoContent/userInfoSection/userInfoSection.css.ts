import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const userInfoStyle = style({
  display: 'flex',
  width: '33.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1.2rem',
});

export const infoStepStyle = style({
  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray11,
});
