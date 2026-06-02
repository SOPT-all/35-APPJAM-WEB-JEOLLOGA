import skeletonBase from '@components/common/skeleton/skeleton.css';
import { style } from '@vanilla-extract/css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  width: '10.7rem',
});

export const image = style([
  skeletonBase,
  { width: '10.7rem', height: '12.4rem', borderRadius: '4px' },
]);

export const lineShort = style([
  skeletonBase,
  { width: '5rem', height: '1.2rem', borderRadius: '4px' },
]);

export const lineLong = style([
  skeletonBase,
  { width: '9rem', height: '1.6rem', borderRadius: '4px' },
]);

export const tagBox = style({
  display: 'flex',
  gap: '0.4rem',
  marginTop: '0.2rem',
});

export const tag = style([skeletonBase, { width: '3.6rem', height: '2rem', borderRadius: '10px' }]);
