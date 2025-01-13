import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const tagBox = recipe({
  base: {
    padding: '0.3rem 0.8rem',
    borderRadius: '4px',
    ...theme.FONTS.c7R12,
  },

  variants: {
    color: {
      brown: {
        backgroundColor: theme.COLORS.brown1,
        color: theme.COLORS.brown2,
      },
      blue: {
        backgroundColor: theme.COLORS.blue1,
        color: theme.COLORS.blue2,
      },
      gray: {
        backgroundColor: theme.COLORS.black60,
        color: theme.COLORS.white,
      },
    },
  },
});

export default tagBox;
