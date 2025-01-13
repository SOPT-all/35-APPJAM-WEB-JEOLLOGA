import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const BtnBox = style({
  width: '4.4rem',
  height: '4.4rem',
  backgroundColor: theme.COLORS.white,
  boxShadow: theme.COLORS.reserveBtnDropshadow,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default BtnBox;
