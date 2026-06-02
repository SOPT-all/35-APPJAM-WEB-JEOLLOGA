import theme from '@styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '100%': { transform: 'translateX(100%)' },
});

const skeletonBase = style({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.COLORS.gray2,
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    transform: 'translateX(-100%)',
    backgroundImage: `linear-gradient(90deg, transparent, ${theme.COLORS.gray1}, transparent)`,
    animation: `${shimmer} 1.4s ease-in-out infinite`,
  },
});

export const skeletonOverlay = style([skeletonBase, { position: 'absolute', inset: 0 }]);

export default skeletonBase;
