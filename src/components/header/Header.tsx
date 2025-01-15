import Icon from '@assets/svgs';

import * as styles from './header.css';

const Header = () => {
  const handleClick = () => {};

  return (
    <header className={styles.headerContainer}>
      <button onClick={handleClick}>
        <Icon.SmallLogo />
      </button>
      <nav className={styles.iconBox}>
        <Icon.IcnSearchLargeBlack className={styles.iconStyle} onClick={() => handleClick()} />
        <Icon.IcnWish className={styles.iconStyle} onClick={() => handleClick()} />
        <Icon.IcnMyPage className={styles.iconStyle} onClick={() => handleClick()} />
      </nav>
    </header>
  );
};

export default Header;
