import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtnStyle = recipe({
  base: {
    ...theme.FONTS.h5Sb16,
    borderRadius: 8,
    height: '5.2rem',
    color: theme.COLORS.white,
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
  compoundVariants: [
    {
      variants: { isDisabled: false },
      style: {
        ':hover': {
          backgroundColor: theme.COLORS.primary600,
        },
      },
    },
  ],
});

export default bottomBtnStyle;
