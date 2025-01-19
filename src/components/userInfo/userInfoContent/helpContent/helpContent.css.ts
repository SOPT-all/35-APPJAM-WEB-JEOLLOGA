import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const userHelpStyle = style({
  display: 'flex',
  padding: '0 0 0 1.8rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: 8,

  backgroundColor: theme.COLORS.gray1,
});

export default userHelpStyle;
