import { style } from '@vanilla-extract/css';

const container = style({
  marginTop: '1rem',
  marginBottom: '6rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'space-between',
  gap: '4.4rem 0.9rem',
  width: '33.5rem',
});

export default container;
