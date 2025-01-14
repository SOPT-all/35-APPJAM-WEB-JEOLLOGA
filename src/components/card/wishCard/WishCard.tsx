import FlowerIcon from '@components/common/icon/flowerIcon/FlowerIcon';
import Tag from '@components/common/tag/Tag';
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
}

const WishCard = ({
  templeName,
  templestayName,
  tag,
  region,
  type,
  imgUrl,
  liked,
}: WishCardProps) => {
  const [isWished, setIsWished] = useState(liked);

  const onClickWishBtn = () => {
    setIsWished((prev) => !prev);
  };

  return (
    <article className={styles.wishCardContainer}>
      <section className={styles.imageContainer}>
        <img className={styles.image} src={imgUrl} alt={templeName + ' 대표사진'} />
        <button className={styles.wishBtn} onClick={onClickWishBtn}>
          <FlowerIcon isActive={isWished} />
        </button>
      </section>
      <section className={styles.infoBox}>
        <h2 className={styles.hashTag}>#{tag}</h2>
        <h2 className={styles.title}>
          {templeName} {templestayName}
        </h2>
        <div className={styles.tagBpx}>
          <Tag color="brown" label={region} />
          <Tag color="blue" label={type} />
        </div>
      </section>
    </article>
  );
};

export default WishCard;
