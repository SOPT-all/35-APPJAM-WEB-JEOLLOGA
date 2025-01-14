// reviewComponent.css.ts
import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  overflow: 'hidden',
  width: '24rem',
  height: '20rem',
  borderRadius: 5,
  border: `1px solid ${theme.COLORS.gray2}`,

  selectors: {
    '&:hover': {
      opacity: '80%',
    },
  },

  backgroundColor: theme.COLORS.white,
});

export const cardImage = style({
  objectFit: 'cover',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '11.5rem',
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0 1.2rem',
  height: '8.5rem',
  gap: '1.2rem',
});

export const cardTitle = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,

  height: '4.2rem',
  marginTop: '0.6rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',

  ...theme.FONTS.c1Sb15,
});

export const cardInfo = style({
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',

  ...theme.FONTS.c6R13,
  color: theme.COLORS.gray5,
});

export const reviewerName = style({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  width: '12.6rem',
});
