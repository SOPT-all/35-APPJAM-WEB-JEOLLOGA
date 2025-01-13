import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtnStyle = recipe({
  base: {
    ...theme.FONTS.h5Sb16,
    color: theme.COLORS.white,
    borderRadius: 8,
    height: '5.2rem',
  },
  variants: {
    size: {
      small: {
        width: '23.6rem',
      },
      large: {
        width: '33.5rem',
      },
    },
    isDisabled: {
      true: {
        backgroundColor: theme.COLORS.gray5,
        cursor: 'not-allowed',
      },
      false: {
        backgroundColor: theme.COLORS.primary400,
        cursor: 'pointer',
      },
    },
  },
});

export default bottomBtnStyle;
