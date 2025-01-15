import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const rankBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.4rem',
  height: '3.4rem',
  borderRadius: '0 0 8px 8px',
  backgroundColor: theme.COLORS.black60,
  ...theme.FONTS.c2R14,
  marginRight: '2rem',
});

export default rankBox;
