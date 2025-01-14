import * as styles from './smallReview.css';

interface SmallReviewProps {
  reviewTitle: string;
  reviewDate: string;
  reviewName: string | null;
  reviewLink: string;
  blogImage: string | null;
}

const SmallReview = ({
  reviewTitle,
  reviewDate,
  reviewName,
  reviewLink,
  blogImage,
}: SmallReviewProps) => {
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
        <p className={styles.cardTitle}>{reviewTitle}</p>
        <div className={styles.cardInfo}>
          <p className={styles.reviewerName}>{reviewName}</p>
          <p>{reviewDate}</p>
        </div>
      </div>
    </button>
  );
};

export default SmallReview;
