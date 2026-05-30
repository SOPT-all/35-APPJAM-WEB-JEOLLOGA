const emptyMediumImage = '/assets/images/img_gray_light_leaf_medium.png';
const emptySmallImage = '/assets/images/img_gray_light_leaf_small.png';

import ImageWithFallback from '@components/common/imageWithFallback/ImageWithFallback';
import Image from 'next/image';

import * as styles from './reviewCard.css';
import CardInfo from '../cardInfo/CardInfo';

interface ReviewCardProps {
  reviewTitle?: string;
  reviewDate?: string;
  reviewName?: string | null;
  reviewLink?: string;
  reviewDescription?: string | null;
  blogImage?: string | null;
  size: 'small' | 'large';
}

const ReviewCard = ({
  reviewTitle,
  reviewDate,
  reviewName,
  reviewLink,
  reviewDescription,
  blogImage,
  size,
}: ReviewCardProps) => {
  const handleButtonClick = () => {
    window.open(reviewLink, '_blank');
  };
  const emptyImage = size === 'small' ? emptyMediumImage : emptySmallImage;
  const dimensions = size === 'small' ? { width: 240, height: 115 } : { width: 335, height: 118 };

  return (
    <button className={styles.cardContainer({ size })} onClick={handleButtonClick}>
      {blogImage ? (
        <ImageWithFallback
          className={styles.cardImage({ size })}
          src={blogImage}
          fallbackSrc={emptyImage}
          alt="thumbnail"
          width={dimensions.width}
          height={dimensions.height}
          unoptimized={false}
        />
      ) : (
        <div className={styles.emptyImage({ size })}>
          <Image
            src={emptyImage}
            alt="빈 이미지"
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>
      )}
      <div className={styles.cardContent({ size })}>
        <div>
          <p className={styles.cardTitle({ size })}>{reviewTitle}</p>
          {size == 'large' && <p className={styles.cardBody}>{reviewDescription}</p>}
        </div>
        <CardInfo reviewName={reviewName} reviewDate={reviewDate} />
      </div>
    </button>
  );
};

export default ReviewCard;
