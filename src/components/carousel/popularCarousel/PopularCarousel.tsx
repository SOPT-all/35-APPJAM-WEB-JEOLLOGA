import PopularCard from '@components/card/popularCard/PopularCard';
import registDragEvent from '@utils/registDragEvent';
import React, { useState, useRef } from 'react';

import * as styles from './popularCarousel.css';

const stayData = {
  rankings: [
    {
      ranking: 1,
      id: 1,
      templeName: '대원사(보성)',
      tag: '방긋방긋',
      region: '전남',
      liked: true,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
    {
      ranking: 2,
      id: 2,
      templeName: '수원사',
      tag: '방긋방긋',
      region: '경기',
      liked: true,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
    {
      ranking: 3,
      id: 3,
      templeName: '용흥사',
      tag: '방긋방긋',
      region: '전남',
      liked: false,
      imgUrl: 'http://noms.templestay.com/images//RsImage/L_13774.png',
    },
  ],
};

const PopularCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transX, setTransX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveDistance = 355;

  return (
    <section ref={carouselRef} className={styles.carouselWrapper}>
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
            const maxIndex = stayData.rankings.length - 1;

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
        {stayData.rankings.map((data, id) => (
          <>
            <PopularCard
              key={id}
              ranking={data.ranking}
              templeName={data.templeName}
              templeLoc={data.region}
              templeImg={data.imgUrl}
              isLiked={data.liked}
              tag={data.tag}
              onClick={() => {
                alert(`${data.templeName} 클릭됨!`);
              }}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default PopularCarousel;
