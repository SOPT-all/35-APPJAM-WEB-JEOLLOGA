import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonStyle = recipe({
  base: {
    backgroundColor: '#fff',
    ...theme.FONTS.h5Sb16,
    display: 'flex',
    justifyContent: 'space-between',
    width: '31.7rem',
    padding: '1.6rem 2.3rem 1.6rem 0',
  },
  variants: {
    hasDivider: {
      true: {
        boxShadow: `0px 1px 0px 0px ${theme.COLORS.gray2}`,
      },
      false: {},
    },
  },
  defaultVariants: {
    hasDivider: false,
  },
});

export default buttonStyle;
