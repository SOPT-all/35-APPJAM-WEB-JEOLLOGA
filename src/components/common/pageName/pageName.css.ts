import theme from '@styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '4rem 1fr 4rem',
  width: '33.5rem',
  height: '4rem',
  alignItems: 'center',
});

export const buttonLayout = style({
  width: '4rem',
  height: '4rem',
});

globalStyle(`${buttonLayout} svg`, {
  width: '2.4rem',
  height: '2.4rem',
});

export const titleStyle = style({
  gridColumn: '2',
  textAlign: 'center',
  width: '20.3rem',
  margin: '0 auto',
  ...theme.FONTS.h3Sb18,
  color: theme.COLORS.black,
});
