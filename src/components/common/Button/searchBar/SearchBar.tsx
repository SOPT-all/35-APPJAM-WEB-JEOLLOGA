import Icon from '@assets/svgs';
import { useState } from 'react';

import * as styles from './searchBar.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarLayout}>
        <Icon.IcnSearchMediumGray />
        <input
          className={styles.inputStyle}
          placeholder="텍스트 텍스트"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </div>
      <Icon.IcnCloseLargeGray onClick={handleClearInput} />
    </div>
  );
};

export default SearchBar;
