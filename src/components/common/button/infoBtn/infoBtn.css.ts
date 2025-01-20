import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonStyle = recipe({
  base: {
    backgroundColor: 'inherit',
    ...theme.FONTS.h5Sb16,
    display: 'flex',
    justifyContent: 'space-between',
    width: '31.7rem',
    padding: '1.6rem 2.3rem 1.6rem 0',
    borderRadius: 8,
  },
  variants: {
    hasDivider: {
      true: {
        borderBottom: `1px solid ${theme.COLORS.gray2}`,
      },
      false: {},
    },
  },
  defaultVariants: {
    hasDivider: false,
  },
});

export default buttonStyle;
