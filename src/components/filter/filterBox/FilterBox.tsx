import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import PriceSlider from '@components/filter/priceSlider/PriceSlider';

import * as styles from './filterBox.css';

interface Price {
  minPrice: number;
  maxPrice: number;
}

interface FilterBoxProps {
  title: string;
  items: string[];
  id: string;
  filtersState: Record<string, number>;
  onToggleFilter: (filterName: string) => void;
  price?: Price;
  onPriceChange?: (price: Price) => void;
}

const FilterBox = ({
  title,
  items,
  id,
  filtersState,
  onToggleFilter,
  price,
  onPriceChange,
}: FilterBoxProps) => {
  return (
    <div className={styles.filterBoxContainer} id={id}>
      <h1 className={styles.titleStyle}>{title}</h1>
      {title === '유형' && <p className={styles.helperText}>*휴식형과 체험형은 숙박입니다.</p>}
      {title === '가격' ? (
        price && onPriceChange ? (
          <PriceSlider value={price} onChange={onPriceChange} />
        ) : null
      ) : (
        <div className={styles.buttonWrapper}>
          {items.map((item, index) => {
            const isActiveStatus = filtersState[item] === 1;
            return (
              <BasicBtn
                key={index}
                variant="blackOutlined"
                label={item}
                onClick={() => onToggleFilter(item)}
                isActive={isActiveStatus}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterBox;
