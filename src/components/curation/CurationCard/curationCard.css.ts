import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const CardContainer = style({
  width: '28.5rem',
  height: '26.8rem',
  borderRadius: '8px',
  overflow: 'hidden',
  border: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-end',

  padding: '1.6rem',
  color: theme.COLORS.white,
});

export const textbox = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
});

export const title = style({
  ...theme.FONTS.h3Sb18,
});

export const subtitle = style({
  ...theme.FONTS.b9R15,
});
