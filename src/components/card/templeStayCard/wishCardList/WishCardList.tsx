import React from 'react';

import TempleStayCard from '../TempleStayCard';
import * as styles from './wishCardList.css';

interface WishCardListProps {
  data: {
    id: number;
    templeName: string;
    templestayName: string;
    tag: string;
    region: string;
    type: string;
    imgUrl: string;
    liked: boolean;
  }[];
  layout: 'vertical' | 'horizontal';
}
const WishCardList = ({ data, layout = 'vertical' }: WishCardListProps) => {
  return (
    <section className={styles.default}>
      {data.map((temple) => (
        <TempleStayCard
          key={temple.id}
          id={temple.id}
          templeName={temple.templeName}
          templestayName={temple.templestayName}
          tag={temple.tag}
          region={temple.region}
          type={temple.type}
          imgUrl={temple.imgUrl}
          liked={temple.liked}
          layout={layout}
        />
      ))}
    </section>
  );
};

export default WishCardList;
