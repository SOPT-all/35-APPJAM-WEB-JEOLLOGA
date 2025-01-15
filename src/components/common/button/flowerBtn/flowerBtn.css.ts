import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const FlowerBtnStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4.4rem',
  gap: '0.3rem',

  padding: '0 0.3rem',
  boxSizing: 'border-box',
});

export const textStyle = recipe({
  base: {
    ...theme.FONTS.b8M15,
    color: theme.COLORS.gray7,
  },

  variants: {
    active: {
      false: {},
      true: {
        color: theme.COLORS.gray10,
      },
    },
  },
});
