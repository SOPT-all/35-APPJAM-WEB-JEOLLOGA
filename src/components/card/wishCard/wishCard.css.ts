import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wishCardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',

  width: '16.3rem',
  height: '27.7rem',
});

export const imageContainer = style({
  position: 'relative',
  width: '16.3rem',
  height: '17.2rem',
  borderRadius: '4px',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  borderRadius: '4px',
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

export const flowerBtnStyle = style({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  zIndex: '2',
});

export const infoBox = style({
  display: 'flex',
  flexDirection: 'column',

  width: '16.3rem',
  height: '9.7rem',
});

export const hashTag = style({
  width: '100%',
  height: '1.7rem',

  color: theme.COLORS.gray5,
  ...theme.FONTS.c5M13,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const title = style({
  width: '100%',
  height: '4.9rem',

  color: theme.COLORS.black,
  ...theme.FONTS.h5Sb16,
  alignContent: 'center',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const tagBpx = style({
  display: 'flex',
  gap: '0.6rem',

  width: '100%',
  height: '2.1rem',
  marginTop: '0.8rem',
});
