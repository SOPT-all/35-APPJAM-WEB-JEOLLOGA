import CurationCard from '@components/curation/curationCard/CurationCard';
import CURATION_INFO from '@constants/curationInfo';
import registDragEvent from '@utils/registDragEvent';
import { useState, useRef } from 'react';

import * as styles from './curationCarousel.css';

const CurationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveDistance = 295; // carousel card width + gap

  return (
    <section ref={carouselRef} className={styles.carouselWrapper}>
      <div className={styles.emptyBox} />
      <div
        className={styles.carouselContainer}
        style={{
          transform: `translateX(${-currentIndex * moveDistance + transX}px)`,
          transition: `transform 200ms ease-in-out 0s`,
        }}
        {...registDragEvent({
          onDragChange: (deltaX) => {
            setTransX(deltaX);
          },
          onDragEnd: (deltaX) => {
            const maxIndex = CURATION_INFO.length - 1;

            // 드래그를 왼쪽으로 넘겼을 때
            if (deltaX < -100) {
              setCurrentIndex(currentIndex + 1 > maxIndex ? maxIndex : currentIndex + 1);
            }
            // 드래그를 오른쪽으로 넘겼을 때
            if (deltaX > 100) {
              setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
            }

            setTransX(0);
          },
        })}>
        {CURATION_INFO.map((data, index) => (
          <CurationCard
            key={index}
            bgImage={data.bgImage}
            title={data.title}
            subtitle={data.subtitle}
            onClick={() => {
              data.onClick();
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CurationCarousel;
