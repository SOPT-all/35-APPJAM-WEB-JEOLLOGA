import { style } from '@vanilla-extract/css';

export const carouselWrapper = style({
  width: '33.5rem',
  overflow: 'hidden',
  display: 'flex',
});

export const carouselContainer = style({
  display: 'flex',
  gap: '2rem',
});

export const carouselItem = style({
  flexShrink: 0,
});

export const emptyBox = style({
  width: '2rem',
  height: '100%',
  flexShrink: 0,
});
