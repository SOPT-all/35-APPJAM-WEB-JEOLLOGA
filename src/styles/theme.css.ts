import { createGlobalTheme } from '@vanilla-extract/css';

const theme = createGlobalTheme(':root', {
  COLORS: {
    gray1: '#F6F6F6',
    gray2: '#EBEDEF',
    gray3: '#E1E4E7',
    gray4: '#CDD2D7',
    gray5: '#B9BEC5',
    gray6: '#ABB1B8',
    gray7: '#979EA6',
    gray8: '#868D95',
    gray9: '#787F87',
    gray10: '#6A7079',
    gray11: '#484D54',

    black: '#121212',
    white: '#ffffff',

    primary200: '#D3ECD8',
    primary400: '#6EBE7D',
  },

  FONTS: {
    //Heading
    headSemiBold24: {
      fontSize: '2.4rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    headSemiBold20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    headSemiBold18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    headSemiBold17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    headSemiBold16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    headRegular20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },

    //Body
    bodyMedium20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyMedium18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyRegular18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyMedium17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyRegular17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyMedium16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyRegular16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyMedium15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    bodyRegular15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },

    //caption
    captionSemiBold15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    captionRegular14: {
      fontSize: '1.4rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
  },
});

export default theme;
