import recommendStyles from './recommendCard.css';
import * as styles from './recommendCardSkeleton.css';

const RecommendListSkeleton = ({ count = 3 }: { count?: number }) => {
  return (
    <section className={recommendStyles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.card} aria-hidden>
          <div className={styles.image} />
          <div className={styles.lineShort} />
          <div className={styles.lineLong} />
          <div className={styles.tagBox}>
            <div className={styles.tag} />
            <div className={styles.tag} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecommendListSkeleton;
