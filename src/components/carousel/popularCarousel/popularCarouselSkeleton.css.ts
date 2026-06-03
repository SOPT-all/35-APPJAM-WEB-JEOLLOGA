import skeletonBase from '@components/common/skeleton/skeleton.css';
import { style } from '@vanilla-extract/css';

export const slide = style({
  minWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const image = style([skeletonBase, { width: '100%', height: '137px', borderRadius: 8 }]);

export const bottom = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  paddingTop: '0.8rem',
});

export const titleLine = style([
  skeletonBase,
  { width: '18rem', height: '2rem', borderRadius: '4px' },
]);

export const subLine = style([
  skeletonBase,
  { width: '12rem', height: '1.5rem', borderRadius: '4px' },
]);
