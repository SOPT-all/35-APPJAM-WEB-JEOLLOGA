import { style } from '@vanilla-extract/css';

const container = style({
  minHeight: '100vh',
  paddingBottom: '4.4rem',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  justifyItems: 'center',
});

export default container;
