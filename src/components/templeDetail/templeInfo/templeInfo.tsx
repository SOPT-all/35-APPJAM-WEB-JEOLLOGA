import DetailTitle from '@components/detailTitle/DetailTitle';
import React, { useRef, useState, useEffect } from 'react';

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
  const [isAppeared, setIsAppeared] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      setIsAppeared(contentElement.scrollHeight > contentElement.clientHeight);
    }
  }, []);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

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
