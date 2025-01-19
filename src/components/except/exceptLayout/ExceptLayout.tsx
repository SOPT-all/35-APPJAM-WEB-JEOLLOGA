import React from 'react';

import * as styles from './exceptLayout.css';

interface ExceptLayoutProps {
  type: 'loading' | 'networkError';
}

const ExceptLayout = ({ type }: ExceptLayoutProps) => {
  return (
    <section className={styles.exceptWrapper}>
      <span className={styles.title}>{type === 'loading' ? '' : '잠시 연결이 불안정해요'}</span>
      <image className={styles.imgContainer}>
        <img
          src={
            type === 'loading'
              ? 'src/assets/images/img_moktak_hit.png'
              : 'src/assets/images/img_tree_fall.png'
          }
          alt={type === 'loading' ? '로딩 중' : '네트워크 오류'}
          width={type === 'loading' ? 144 : 171}
        />
      </image>
      <span className={styles.subtitle[type]}>
        {type === 'loading' ? '연결 중...' : '새로고침 버튼을 눌러주세요!'}
      </span>
    </section>
  );
};

export default ExceptLayout;
