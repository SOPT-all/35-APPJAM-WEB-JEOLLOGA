import Tag from '@components/common/tag/Tag';

import * as styles from './wishInfoSection.css';

interface WishInfoSectionProps {
  templeName: string;
  templestayName: string;
  tag: string;
  region: string;
  type: string;
}

const WishInfoSection = ({
  templeName,
  templestayName,
  tag,
  region,
  type,
}: WishInfoSectionProps) => {
  return (
    <section className={styles.infoBox}>
      <div>
        <h2 className={styles.hashTag}>#{tag}</h2>
        <h2 className={styles.title}>
          {templeName} {templestayName}
        </h2>
      </div>
      <div className={styles.tagBox}>
        <Tag color="brown" label={region} />
        <Tag color="blue" label={type} />
      </div>
    </section>
  );
};

export default WishInfoSection;
