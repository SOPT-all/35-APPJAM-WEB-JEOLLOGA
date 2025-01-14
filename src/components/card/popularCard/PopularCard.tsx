import Icon from '@assets/svgs';

import * as styles from './popularCard.css';
interface PopularCardProps {
  ranking: number;
  templeName: string;
  templeLoc: string;
  templeImg: string;
  tag: string;
  onClick: () => void;
  isLiked?: boolean;
}

const PopularCard = ({
  ranking,
  templeName,
  templeLoc,
  templeImg,
  tag,
  onClick,
  isLiked,
}: PopularCardProps) => {
  return (
    <button className={styles.cardWrapper} onClick={onClick}>
      <div>
        <div className={styles.imgBox} style={{ backgroundImage: `url(${templeImg})` }}>
          <span className={styles.rankBox}>{ranking}</span>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.bottomContainer}>
            <span className={styles.templeName}>{templeName}</span>
            <div className={styles.bottomBox}>
              <span>{templeLoc}</span>
              <Icon.IcnDivider />
              <span>{tag}</span>
            </div>
          </div>
          <button className={styles.likeBtn}>
            {isLiked ? <Icon.IcnFlowerPink /> : <Icon.IncFlowerGray />}
          </button>
        </div>
      </div>
    </button>
  );
};

export default PopularCard;
