import skeletonBase from '@components/common/skeleton/skeleton.css';
import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const card = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.2rem',
  width: '33.5rem',
  height: '13.5rem',
  borderRadius: '4px',
  backgroundColor: theme.COLORS.white,
});

export const image = style([
  skeletonBase,
  {
    flexShrink: 0,
    width: '12rem',
    height: '13.5rem',
    borderRadius: '4px 0 0 4px',
  },
]);

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.8rem',
  flex: 1,
});

export const lineShort = style([
  skeletonBase,
  { width: '6rem', height: '1.4rem', borderRadius: '4px' },
]);

export const lineLong = style([
  skeletonBase,
  { width: '15rem', height: '1.8rem', borderRadius: '4px' },
]);

export const tagBox = style({
  display: 'flex',
  gap: '0.6rem',
  marginTop: '0.4rem',
});

export const tag = style([
  skeletonBase,
  { width: '4.4rem', height: '2.2rem', borderRadius: '10px' },
]);
