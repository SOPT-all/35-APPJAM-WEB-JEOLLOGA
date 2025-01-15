import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  overflow: 'hidden',
  width: '33.5rem',
  height: '23.2rem',
  borderRadius: 4,
  border: `1px solid ${theme.COLORS.gray2}`,
  backgroundColor: theme.COLORS.white,

  selectors: {
    '&:hover': {
      filter: 'brightness(96%)',
    },
  },
});

export const cardImage = style({
  objectFit: 'cover',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '11.8rem',
});

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0 1.2rem',
  height: '11.4rem',
  gap: '1.2rem',
});

export const cardTitle = style({
  marginTop: '1rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  marginBottom: '0.4rem',
  width: '31.1rem',

  ...theme.FONTS.h3Sb18,
});

export const cardBody = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  height: '3.6rem',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',

  ...theme.FONTS.c2R14,
  color: theme.COLORS.gray8,
});
