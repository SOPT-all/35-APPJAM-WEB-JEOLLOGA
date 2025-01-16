import DetailTitle from '@components/detailTitle/DetailTitle';
import useExpandHook from '@hooks/useExpandHook/useExpandHook';
import { useRef } from 'react';

import ContentCollapse from './contentCollapse/ContentCollapse';
import * as styles from './templeInfo.css';

const TEMPLEINFODATA = {
  introduction: [
    '차 한 잔의 행복 (휴식형)',
    '새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나새소리를 들으며 잠시 숲길을 거닐거나',
  ],
};

const TempleInfo = () => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const { isAppeared, isExpanded, handleToggleExpand } = useExpandHook(contentRef);

  return (
    <div className={styles.templeInfoContainer}>
      <DetailTitle title="템플스테이 정보" />
      <div className={styles.templeInfoBoxStyle}>
        <h3 className={styles.templeInfoTitle}>{TEMPLEINFODATA.introduction[0]}</h3>
        <p
          ref={contentRef}
          className={`${styles.templeInfoContent} ${isExpanded ? styles.expandedContent : ''}`}>
          {TEMPLEINFODATA.introduction[1]}
        </p>
        {isAppeared && (
          <ContentCollapse
            leftIcon={isExpanded ? 'IcnArrowGrayUp' : 'IcnArrowGrayDown'}
            text={isExpanded ? '접어두기' : '더보기'}
            onClick={handleToggleExpand}
          />
        )}
      </div>
    </div>
  );
};

export default TempleInfo;
