import * as styles from './largeReview.css';

interface LargeReviewProps {
  reviewTitle: string;
  reviewDate: string;
  reviewName: string | null;
  reviewLink: string;
  reviewDescription: string;
  blogImage: string | null;
}

const LargeReview = ({
  reviewTitle,
  reviewDate,
  reviewName,
  reviewLink,
  reviewDescription,
  blogImage,
}: LargeReviewProps) => {
  const handleButtonClick = () => {
    window.location.href = reviewLink;
  };

  return (
    <button className={styles.cardContainer} onClick={handleButtonClick}>
      {blogImage ? (
        <img className={styles.cardImage} src={blogImage} alt="thumbnail" />
      ) : (
        <img className={styles.cardImage} src="/default-image.png" alt="Default thumbnail" />
      )}
      <div className={styles.cardContent}>
        <div>
          <p className={styles.cardTitle}>{reviewTitle}</p>
          <p className={styles.cardBody}>{reviewDescription}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.reviewerName}>{reviewName}</p>
          <p>{reviewDate}</p>
        </div>
      </div>
    </button>
  );
};

export default LargeReview;
