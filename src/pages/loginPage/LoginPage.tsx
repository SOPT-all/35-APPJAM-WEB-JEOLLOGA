import KakaoBtn from '@components/common/button/kakaoBtn/KakaoBtn';
import PageName from '@components/common/pageName/PageName';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as styles from './loginPage.css';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state?.type || 'my';

  return (
    <section className={styles.loginWrapper}>
      <PageName
        title={type === 'my' ? '마이페이지' : '위시리스트'}
        onLeftClick={() => navigate(-1)}
        isLikeBtn={false}
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.textStyle}>
          {type === 'my'
            ? '절로가를 200% 즐기기 위해\n로그인 하러가기'
            : '나만의 위시리스트를\n만들고 싶다면 로그인을 해주세요'}
        </h2>

        <img
          src={
            type === 'my'
              ? 'src/assets/images/img_yellow_light_smile.png'
              : 'src/assets/images/img_pink_light_smile.png'
          }
          alt={type === 'my' ? '마이페이지 로그인' : '위시리스트 로그인'}
          className={styles.imgStyle}
          width={270}
        />
      </div>
      <KakaoBtn />
    </section>
  );
};

export default LoginPage;
