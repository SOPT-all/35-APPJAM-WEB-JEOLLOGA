import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const iconStyle = recipe({
  base: {
    color: 'currentColor',
  },
  variants: {
    size: {
      small: {
        width: '1.3rem',
        height: '1.3rem',
      },
      medium: {
        width: '2rem',
        height: '2rem',
      },
    },
  },
});

export const textBtnStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.3rem',
    color: theme.COLORS.gray5,
  },

  variants: {
    clicked: {
      false: {},
      true: {},
    },

    size: {
      small: { height: '3.3rem', color: theme.COLORS.gray5, ...theme.FONTS.c6R13 },
      medium: {
        height: '4.4rem',
        color: theme.COLORS.gray7,
        padding: '0 0.8rem',
        ...theme.FONTS.b8M15,
        selectors: {
          '&:active': {
            color: theme.COLORS.gray10,
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        clicked: true,
        size: 'small',
      },
      style: {
        color: theme.COLORS.gray9,
      },
    },
  ],
});
