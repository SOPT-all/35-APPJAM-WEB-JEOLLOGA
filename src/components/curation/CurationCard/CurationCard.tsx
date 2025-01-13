import * as styles from './curationCard.css';

interface CurationCardProps {
  bgImage: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}

const CurationCard = ({ bgImage, title, subtitle, onClick }: CurationCardProps) => {
  return (
    <button
      className={styles.cardContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={onClick}>
      <div className={styles.textbox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </button>
  );
};

export default CurationCard;
