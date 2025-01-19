import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

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

export default loginBtn;
