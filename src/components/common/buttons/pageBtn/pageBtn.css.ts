import theme from '@styles/theme.css';
import { styleVariants } from '@vanilla-extract/css';

const commonPageNumStyles = {
  width: '2.6rem',
  height: '2.6rem',
  ...theme.FONTS.c2R14,
};

const pageBtnStyles = styleVariants({
  current: {
    ...commonPageNumStyles,
    color: theme.COLORS.white,
    borderRadius: 24,
    backgroundColor: theme.COLORS.gray10,
  },
  default: {
    ...commonPageNumStyles,
    color: theme.COLORS.gray10,
  },
});

export default pageBtnStyles;
