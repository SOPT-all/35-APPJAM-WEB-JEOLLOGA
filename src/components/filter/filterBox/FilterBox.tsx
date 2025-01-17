import BasicBtn from '@components/common/button/basicBtn/BasicBtn';

import * as styles from './filterBox.css';

interface FilterBoxProps {
  title: string;
  items: string[];
}

const FilterBox = ({ title, items }: FilterBoxProps) => {
  return (
    <div className={styles.filterBoxContainer}>
      <h1 className={styles.titleStyle}>{title}</h1>
      <div className={styles.buttonWrapper}>
        {items.map((item, index) => (
          <BasicBtn key={index} variant="blackOutlined" label={item} />
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
