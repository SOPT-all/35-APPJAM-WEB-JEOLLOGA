import * as styles from './popularCarousel.css';
import * as skeleton from './popularCarouselSkeleton.css';

const PopularCarouselSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slideList}>
        <div className={skeleton.slide} aria-hidden>
          <div className={skeleton.image} />
          <div className={skeleton.bottom}>
            <div className={skeleton.titleLine} />
            <div className={skeleton.subLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCarouselSkeleton;
