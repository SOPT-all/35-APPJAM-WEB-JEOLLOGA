import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    cursor: 'pointer',
  },
  variants: {
    layout: {
      vertical: {
        width: '16.3rem',
        height: '27.7rem',
      },
      horizontal: {
        position: 'relative',
        flexDirection: 'row',
        gap: '1.2rem',
        width: '33.5rem',
        height: '13.5rem',
        borderRadius: '4px',
        backgroundColor: theme.COLORS.white,
      },
    },
    size: {
      default: {},
      small: {
        width: '10.7rem',
        height: 'auto',
        gap: '0.4rem',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
    size: 'default',
  },
  compoundVariants: [
    {
      variants: {
        layout: 'vertical',
        size: 'small',
      },
      style: {
        width: '10.7rem',
      },
    },
  ],
});

export const imgSection = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    layout: {
      vertical: {
        width: '16.3rem',
        height: '17.2rem',
      },
      horizontal: {
        width: '12rem',
        height: '13.5rem',
      },
    },
    size: {
      default: {},
      small: {
        minWidth: '10.7rem',
        minHeight: '12.4rem',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
    size: 'default',
  },
  compoundVariants: [
    {
      variants: {
        layout: 'vertical',
        size: 'small',
      },
      style: {
        width: '10.7rem',
        height: '12.4rem',
      },
    },
  ],
});

export const image = recipe({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: '0.15s ease-out',
  },
  variants: {
    layout: {
      vertical: {
        borderRadius: '4px',
      },
      horizontal: {
        width: '12rem',
        height: '13.5rem',
        borderRadius: '4px 0 0 4px',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
});

export const emptyImgSection = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    backgroundColor: theme.COLORS.gray2,
    transition: '0.15s ease-out',
  },
  variants: {
    layout: {
      vertical: {
        width: '16.3rem',
        height: '17.2rem',
        borderRadius: 4,
      },
      horizontal: {
        width: '12rem',
        height: '13.5rem',
        borderRadius: '4px 0 0 4px',
      },
    },
    size: {
      default: {},
      small: {
        minWidth: '10.7rem',
        minHeight: '12.4rem',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
    size: 'default',
  },
  compoundVariants: [
    {
      variants: {
        layout: 'vertical',
        size: 'small',
      },
      style: {
        width: '10.7rem',
        height: '12.4rem',
      },
    },
  ],
});

export const wishBtn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0',
  right: '0',

  width: '4rem',
  height: '4rem',

  zIndex: '2',
});

// hover 효과를 위한 별도 스타일
export const verticalContainer = style({});
export const verticalSmallContainer = style({});
export const horizontalContainer = style({});

export const verticalImage = style({
  selectors: {
    [`${verticalContainer}:hover &, ${verticalSmallContainer}:hover &`]: {
      filter: 'brightness(88%)',
    },
  },
});

export const horizontalImage = style({
  selectors: {
    [`${horizontalContainer}:hover &`]: {
      filter: 'brightness(88%)',
    },
  },
});
