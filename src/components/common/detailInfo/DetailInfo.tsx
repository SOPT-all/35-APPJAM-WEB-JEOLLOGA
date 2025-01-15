import * as styles from './detailInfo.css';

interface DetailInfoProps {
  title: string;
  content: string;
}

const DetailInfo = ({ title, content }: DetailInfoProps) => {
  return (
    <div className={styles.infoBox}>
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
    </div>
  );
};

export default DetailInfo;
