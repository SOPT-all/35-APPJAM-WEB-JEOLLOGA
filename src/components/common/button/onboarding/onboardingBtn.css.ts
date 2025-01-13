import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const OnboardingBtnStyle = recipe({
  base: {
    ...theme.FONTS.c1Sb15,
    borderRadius: 40,
    width: '15.5rem',
    height: '5.2rem',
    border: '1px solid',
  },
  variants: {
    active: {
      '& svg path': {
        stroke: theme.COLORS.primary200,
        true: {
          backgroundColor: theme.COLORS.green1,
          borderColor: theme.COLORS.primary200,
          color: theme.COLORS.primary200,
        },
        false: {
          backgroundColor: theme.COLORS.gray1,
          borderColor: theme.COLORS.gray2,
          color: theme.COLORS.gray10,
        },
      },
    },
  },
});

export const btnContentStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
});
