'use client';
import LottiePlayer from '@components/common/lottie/LottiePlayer';
import React from 'react';

import * as styles from './reviewEmpty.css';

const ReviewEmpty = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.textStyle}>{'아직 등록된\n블로그 리뷰가 없어요'}</p>
        <LottiePlayer
          keyId="review"
          src="/lotties/moktak_sad.lottie"
          style={{ width: '15rem', height: '10.3rem' }}
        />
      </div>
    </div>
  );
};

export default ReviewEmpty;
