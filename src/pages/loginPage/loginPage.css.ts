import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const textStyle = style({
  ...theme.FONTS.h3Sb18,
  whiteSpace: 'pre-line',
  textAlign: 'center',
});

export const loginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4.4rem 0',
  gap: '9.3rem',
  width: '33.5rem',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const imgContainer = style({
  width: '27rem',
  height: '28.8rem',
});
