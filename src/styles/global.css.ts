import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import '@styles/reset.css.ts';

globalFontFace('Pretendard-Medium', {
  fontWeight: 400,
  fontStyle: 'normal',
  src: "url('/src/assets/fonts/Pretendard-Medium.woff2') format('woff2')",
});

globalFontFace('Pretendard-Regular', {
  fontWeight: 500,
  fontStyle: 'normal',
  src: "url('/src/assets/fonts/Pretendard-Regular.woff2') format('woff2')",
});

globalFontFace('Pretendard-SemiBold', {
  fontWeight: 600,
  fontStyle: 'normal',
  src: "url('/src/assets/fonts/Pretendard-SemiBold.woff2') format('woff2')",
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  width: 100,
  fontSize: '62.5%',
  scrollBehavior: 'smooth',
});

globalStyle('#root', {
  width: '37.5rem',
  minHeight: '100dvh',
  backgroundColor: '#fff',
  margin: '0 auto',
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('body, button, input, select, table, textarea', {
  fontFamily: `
      Pretendard-Medium,
      Pretendard-Regular,
      Pretendard-Bold,
      -apple-system,
      BlinkMacSystemFont,
      Malgun Gothic,
      맑은 고딕,
      helvetica,
      sans-serif`,
});
