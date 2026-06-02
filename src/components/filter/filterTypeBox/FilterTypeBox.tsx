'use client';

import Icon from '@assets/svgs';
import BasicBtn from '@components/common/button/basicBtn/BasicBtn';
import FilterBottomSheetModal from '@components/filter/filterBottomSheetModal/FilterBottomSheetModal';
import { useState } from 'react';
import titleMap from 'src/type/titleMap';

import * as styles from './filterTypeBox.css';

interface FilterTypeBoxProps {
  activeFilters: string[];
  onResetGroup?: (group: string) => void;
  searchText?: string;
}

const FilterTypeBox = ({ activeFilters, onResetGroup, searchText }: FilterTypeBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTap, setSelectedTap] = useState<string>('region');

  const handleClickFilter = (filter: string) => {
    setSelectedTap(filter);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleClickFilter('region')}>
        <Icon.IcnFilter />
      </button>
      <div className={styles.scrollContainer}>
        {Object.entries(titleMap).map(([key, label]) => {
          return (
            <BasicBtn
              key={key}
              variant="grayOutlined"
              label={label}
              isActive={activeFilters.includes(key)}
              onClick={() => handleClickFilter(key)}
              rightIcon={
                activeFilters.includes(key) && onResetGroup ? 'IcnCloseSmallGray' : undefined
              }
              onRightIconClick={() => onResetGroup?.(key)}
            />
          );
        })}
        <FilterBottomSheetModal
          selectedTap={selectedTap}
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          searchText={searchText}
        />
      </div>
    </div>
  );
};

export default FilterTypeBox;
