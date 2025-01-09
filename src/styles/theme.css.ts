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

    gradient: 'linear-gradient(180deg, #00000000 61.26%, #000000BF 100%)',
  },

  FONTS: {
    //Heading
    h0B24: {
      fontSize: '2.4rem',
      fontFamily: "'Pretendard-Bold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h1Sb24: {
      fontSize: '2.4rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h2Sb20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h3Sb18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h4Sb17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h5Sb16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    h6R20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },

    //Body
    b1M20: {
      fontSize: '2rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b2M18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b3R18: {
      fontSize: '1.8rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b4M17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b5R17: {
      fontSize: '1.7rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b6M16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b7R16: {
      fontSize: '1.6rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b8M15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    b9R15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },

    //caption
    c1Sb15: {
      fontSize: '1.5rem',
      fontFamily: "'Pretendard-SemiBold', sans-serif",
      lineHeight: '140%',
      letterSpacing: '1%',
    },
    c2R14: {
      fontSize: '1.4rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c3R12: {
      fontSize: '1.2rem',
      fontFamily: "'Pretendard-Regular', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
    c4M12: {
      fontSize: '1.2rem',
      fontFamily: "'Pretendard-Medium', sans-serif",
      lineHeight: '128%',
      letterSpacing: '2%',
    },
  },
});

export default theme;
