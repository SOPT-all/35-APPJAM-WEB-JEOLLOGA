import * as styles from './templeStayCardSkeleton.css';

const TempleStayCardSkeleton = () => {
  return (
    <div className={styles.card} aria-hidden>
      <div className={styles.image} />
      <div className={styles.info}>
        <div className={styles.lineShort} />
        <div className={styles.lineLong} />
        <div className={styles.tagBox}>
          <div className={styles.tag} />
          <div className={styles.tag} />
        </div>
      </div>
    </div>
  );
};

export default TempleStayCardSkeleton;
