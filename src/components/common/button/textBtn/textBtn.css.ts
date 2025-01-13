import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const textBtnStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.3rem',
    backgroundColor: 'transparent',
    border: 'none',
  },

  variants: {
    theme: {
      lightGray: {
        ...theme.FONTS.c6R13,
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
      variants: { theme: 'lightGray', state: 'default' },
      style: { color: theme.COLORS.gray5 },
    },
    {
      variants: { theme: 'lightGray', state: 'pressed' },
      style: { color: theme.COLORS.gray9 },
    },
    {
      variants: { theme: 'gray', state: 'default' },
      style: { color: theme.COLORS.gray7 },
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
