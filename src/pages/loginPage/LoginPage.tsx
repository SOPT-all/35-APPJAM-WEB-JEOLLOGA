import Icon from '@assets/svgs';
import React from 'react';

import * as styles from './loginPage.css';

const LoginPage = () => {
  return (
    <section className={styles.loginWrapper}>
      <div className={styles.logoContainer}>
        <Icon.Logo />
        <p className={styles.subtitleStyle}>템플스테이를 만나는 가장 쉬운 방법</p>
      </div>
      <div className={styles.imgContainer}>그래픽</div>
      <button className={styles.loginBtn}>
        <Icon.IcnKakaoLogo />
        카카오 로그인하기
      </button>
    </section>
  );
};

export default LoginPage;
