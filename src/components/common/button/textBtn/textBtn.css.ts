import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const iconStyle = style({
  width: '1.3rem',
  height: '1.3rem',
  color: 'currentColor',
});

const textBtnStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.3rem',
    ...theme.FONTS.c6R13,
    color: theme.COLORS.gray5,
  },

  variants: {
    clicked: {
      false: {},
      true: {
        color: theme.COLORS.gray9,
      },
    },
    size: {
      small: { height: '3.3rem' },
      medium: { height: '4.4rem' },
    },
  },
});

export default textBtnStyle;
