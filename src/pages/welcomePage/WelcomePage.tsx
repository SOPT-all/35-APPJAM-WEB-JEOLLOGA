import welcomeImg from '@assets/images/img_login_finish.png';
import PageBottomBtn from '@components/common/button/pageBottomBtn/PageBottomBtn';
import { WELCOME_TEXT } from '@constants/onboarding/onboardingSteps';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './welcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [userName] = useState<string>('');

  const handleStart = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.titleStyle}>{`${userName}${WELCOME_TEXT}`}</h1>
      <img src={welcomeImg} alt="환영 페이지 이미지" />
      <PageBottomBtn btnText="절로가 시작하기" size="large" onClick={handleStart} />
    </div>
  );
};

export default WelcomePage;
