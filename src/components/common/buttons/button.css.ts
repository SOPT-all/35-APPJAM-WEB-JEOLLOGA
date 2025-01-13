import theme from '@styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const buttonStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.FONTS.b9R15,

    border: 'none',
    borderRadius: '8px',

    whiteSpace: 'nowrap',

    cursor: 'pointer',

    ':disabled': {
      backgroundColor: theme.COLORS.gray3,
      color: theme.COLORS.white,

      cursor: 'default',
    },
  },

  variants: {
    color: {
      primary: {
        color: theme.COLORS.white,
        backgroundColor: theme.COLORS.primary400,

        '&:hover': {
          backgroundColor: theme.COLORS.primary400,
        },
      },
      secondary: {
        color: '#6D77FF',
        backgroundColor: '#F3F5FF',

        '&:hover': {
          backgroundColor: '#E3E8FF',
        },
      },
      tertiary: {
        color: '#525866',
        backgroundColor: '#F8F8FB',

        '&:hover': {
          backgroundColor: '#ECECF1',
        },
      },
      outline: {
        color: '#525866',
        backgroundColor: '#FFFFFF',

        '&:hover': {
          backgroundColor: '#F8F8FB',
        },
      },
    },

    size: {
      xLarge: {
        padding: '1.6rem 1.4rem',
      },

      large: {
        padding: '1.4rem',
      },

      medium: {
        padding: '1.2rem 1.4rem',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});

export default buttonStyle;
