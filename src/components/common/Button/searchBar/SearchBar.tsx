import Icon from '@assets/svgs';

import * as styles from './searchBar.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarLayout}>
        <Icon.IcnSearchMediumGray />
        <input className={styles.inputStyle} placeholder="텍스트 텍스트" />
      </div>
      <Icon.IcnCloseLargeGray />
    </div>
  );
};

export default SearchBar;
