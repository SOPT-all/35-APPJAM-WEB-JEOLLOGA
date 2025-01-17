import { style } from '@vanilla-extract/css';

export const carouselWrapper = style({
  width: '33.5rem',
  overflow: 'hidden',
  display: 'flex',
});

export const carouselContainer = style({
  display: 'flex',
});

export const carouselItem = style({
  flexShrink: 0,
});
