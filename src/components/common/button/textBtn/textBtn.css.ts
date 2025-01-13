import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const textBtnStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.3rem',
  },

  variants: {
    theme: {
      lightGray: {
        ...theme.FONTS.c6R13,
        color: theme.COLORS.gray5,
        '& svg': {
          width: '1.3rem',
          height: '1.3rem',
        },
        '& svg path': {
          stroke: 'currentColor',
        },
      },
      gray: {
        ...theme.FONTS.b8M15,
        color: theme.COLORS.gray7,
        padding: '0 0.7rem',
        '& svg': {
          width: '2rem',
          height: '2rem',
        },
      },
    },
    state: {
      default: {},
      pressed: {},
    },
    size: {
      small: { height: '3.3rem' },
      medium: { height: '4.4rem' },
    },
  },

  compoundVariants: [
    {
      variants: { theme: 'lightGray', state: 'pressed' },
      style: { color: theme.COLORS.gray9 },
    },
    {
      variants: { theme: 'gray', state: 'pressed' },
      style: {
        color: theme.COLORS.gray10,
      },
    },
  ],
});

export default textBtnStyle;
