import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const tabBarContainer = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '33.5rem',
  height: '4.2rem',

  boxShadow: theme.COLORS.filerDropshadow,
});

export default tabBarContainer;
