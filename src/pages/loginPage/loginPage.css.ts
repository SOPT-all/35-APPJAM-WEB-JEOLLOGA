import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const subtitleStyle = style({
  ...theme.FONTS.b7R16,
});

export const loginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4.3rem',
  padding: '6.7rem 0 4.4rem 0',
});

export const loginBtn = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.6rem',
  width: '33.5rem',
  backgroundColor: theme.COLORS.kakao,
  borderRadius: 8,

  ...theme.FONTS.h4Sb17,
});

export const imgContainer = style({
  width: '33.5rem',
  height: '34.8rem',
  backgroundColor: 'gray',
});
