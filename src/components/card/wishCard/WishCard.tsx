import WishInfoSection from '@components/card/wishCard/WishInfoSection';
import FlowerIcon from '@components/common/icon/flowerIcon/FlowerIcon';
import { useState } from 'react';

import * as styles from './wishCard.css';

interface WishCardProps {
  id: number;
  templeName: string;
  templestayName: string;
  tag: string;
  region: string;
  type: string;
  imgUrl: string;
  liked: boolean;
  layout: 'vertical' | 'horizontal';
}

const WishCard = ({
  templeName,
  templestayName,
  tag,
  region,
  type,
  imgUrl,
  liked,
  layout,
}: WishCardProps) => {
  const [isWished, setIsWished] = useState(liked);
  const isHorizontal = layout === 'horizontal';

  const onClickWishBtn = () => {
    setIsWished((prev) => !prev);
  };

  return (
    <article className={isHorizontal ? styles.horizontalContainer : styles.verticalContainer}>
      <section className={isHorizontal ? styles.horizontalImgSection : styles.verticalImgSection}>
        <img
          className={isHorizontal ? styles.horizontalImage : styles.verticalImage}
          src={imgUrl}
          alt={templeName + ' 대표사진'}
        />
        <button className={styles.wishBtn} onClick={onClickWishBtn}>
          <FlowerIcon isActive={isWished} />
        </button>
      </section>

      <WishInfoSection
        templeName={templeName}
        templestayName={templestayName}
        tag={tag}
        region={region}
        type={type}
      />
    </article>
  );
};

export default WishCard;
