import KakaoBtn from '@components/common/button/kakaoBtn/KakaoBtn';
import PageName from '@components/common/pageName/PageName';
import LOGIN_INFOS from '@constants/loginInfos';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as styles from './loginPage.css';

type LoginType = 'my' | 'wish';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const type: LoginType = location.state?.type || 'my';

  const { title, text, imageSrc, alt } = LOGIN_INFOS[type];

  return (
    <section className={styles.loginWrapper}>
      <PageName title={title} onLeftClick={() => navigate(-1)} isLikeBtn={false} />
      <div className={styles.contentWrapper}>
        <h2 className={styles.textStyle}>{text}</h2>

        <img src={imageSrc} alt={alt} className={styles.imgStyle} width={270} />
      </div>
      <KakaoBtn />
    </section>
  );
};

export default LoginPage;
