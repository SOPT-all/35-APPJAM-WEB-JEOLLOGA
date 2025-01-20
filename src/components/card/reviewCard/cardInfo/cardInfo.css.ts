import theme from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

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
