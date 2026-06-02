'use client';

import Icon from '@assets/svgs';
import ImageWithFallback from '@components/common/imageWithFallback/ImageWithFallback';
import * as styles from './popularCard.css';
import RankBtn from '@components/card/popularCard/RankBtn';

interface PopularCardProps {
  ranking: number;
  templestayName: string;
  templeLoc: string;
  templeImg: string;
  templeName: string;
  isLiked: boolean;
  onLikeToggle: (templestayId: number) => void;
  templestayId: number;
  onClick: () => void;
  priority?: boolean;
}

const PopularCard = ({
  ranking,
  templestayName,
  templeLoc,
  templeImg,
  templeName,
  isLiked,
  onLikeToggle,
  templestayId,
  onClick,
  priority = false,
}: PopularCardProps) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    onLikeToggle(templestayId);
  };

  return (
    <div
      className={styles.slideItem}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${templestayName} 로 이동`}
      onDragStart={(e) => e.preventDefault()}>
      <div className={styles.slideContent}>
        <div className={styles.imageWrapper}>
          <ImageWithFallback
            src={templeImg}
            alt={`${templestayName} 대표 이미지`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={priority}
          />
          <RankBtn ranking={ranking} />
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.bottomContainer}>
            <h3 className={styles.templestayName}>{templestayName}</h3>
            <div className={styles.bottomBox}>
              <span>{templeLoc}</span>
              <Icon.IcnDivider />
              <span>{templeName}</span>
            </div>
          </div>

          <button className={styles.likeBtn} onClick={handleLikeClick}>
            {isLiked ? <Icon.IcnFlowerPink /> : <Icon.IcnFlowerGray />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
